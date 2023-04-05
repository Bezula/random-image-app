import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { filter, map, mergeMap, Subscription, tap } from 'rxjs';
import { WindowService } from 'src/app/core/services';
import { Photo, PhotosHttpService } from 'src/app/shared';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent implements OnInit, OnDestroy {
  @ViewChild('list') list: ElementRef | undefined;
  photos: Photo[] = [];
  pageNum: number = 1;
  private readonly query = 'Computer examples';

  private readonly subscriptions$ = new Subscription();

  constructor(
    private readonly photosHttpService: PhotosHttpService,
    private readonly windowService: WindowService
  ) {}

  ngOnInit(): void {
    this.subscriptions$.add(
      this.photosHttpService
        .searchPhotos(this.query)
        .pipe(
          tap(({ photos, page }) => {
            this.photos = photos;
            this.pageNum = page;
          })
        )
        .subscribe()
    );

    this.subscriptions$.add(
      this.windowService.scroll$
        .pipe(
          filter(() => {
            const listElement = this.list?.nativeElement as HTMLElement;
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            /**
             * Height in pixels
             */
            const otherContentHeight = 123;

            return (
              scrollTop + viewportHeight - otherContentHeight >=
              listElement.offsetHeight
            );
          }),
          mergeMap(() =>
            this.photosHttpService.searchPhotos(this.query, this.pageNum).pipe(
              tap(({ photos, page }) => {
                //FIXME: To optymize
                this.photos = [...this.photos, ...photos];
                this.pageNum = page;
              })
            )
          )
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
