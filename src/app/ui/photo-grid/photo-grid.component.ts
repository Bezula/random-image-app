import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs';
import { Photo, PhotosHttpService } from 'src/app/shared';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];

  private readonly subscriptions$ = new Subscription();

  constructor(private readonly photosHttpService: PhotosHttpService) {}

  ngOnInit(): void {
    this.subscriptions$.add(
      this.photosHttpService
        .searchPhotos('Computer examples')
        .pipe(tap((res) => (this.photos = res.photos)))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
