import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  filter,
  map,
  mergeMap,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { WindowService } from 'src/app/core/services';
import { Photo, PhotosHttpService, SearchService } from 'src/app/shared';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('list') list: ElementRef | undefined;
  @ViewChild('search') search: ElementRef | undefined;
  photos: Photo[] = [];
  pageNum: number = 1;
  fixed = false;
  searchTopPosition = 0;
  searchHeight = 0;
  searchControl = this.searchService.searchControl;
  private query = 'Computer examples';

  private readonly subscriptions$ = new Subscription();

  constructor(
    private readonly photosHttpService: PhotosHttpService,
    private readonly windowService: WindowService,
    private readonly searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchControl.patchValue(this.query);
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
            const searchElement = this.search?.nativeElement as HTMLElement;

            return searchElement.getBoundingClientRect().top < 0 && !this.fixed;
          }),
          tap(() => (this.fixed = true))
        )
        .subscribe()
    );

    this.subscriptions$.add(
      this.windowService.scroll$
        .pipe(
          filter(() => window.scrollY < this.searchTopPosition && this.fixed),
          tap(() => (this.fixed = false))
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
          tap(() => (this.pageNum += 1)),
          mergeMap(() =>
            this.photosHttpService.searchPhotos(this.query, this.pageNum).pipe(
              tap(({ photos }) => {
                //FIXME: To optymize
                this.photos = [...this.photos, ...photos];
              })
            )
          )
        )
        .subscribe()
    );

    this.subscriptions$.add(
      this.searchService.valueChanges$
        .pipe(
          debounceTime(300),
          filter((query) => Boolean(query)),
          switchMap((newQuery) =>
            this.photosHttpService.searchPhotos(newQuery, 1).pipe(
              tap(({ photos }) => {
                this.pageNum = 1;
                this.query = newQuery;
                this.photos = [...photos];
              })
            )
          )
        )
        .subscribe()
    );
  }

  ngAfterViewInit(): void {
    const { top, height } = this.search?.nativeElement.getBoundingClientRect();

    this.searchTopPosition = top;
    this.searchHeight = height;
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
