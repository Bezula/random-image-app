import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Photo, PhotosHttpService } from 'src/app/shared';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private readonly photosHttpService: PhotosHttpService) {}

  ngOnInit(): void {
    this.photosHttpService
      .searchPhotos('Computer examples')
      .pipe(
        tap((res) => {
          this.photos = res.photos;
        })
      )
      .subscribe();
  }
}
