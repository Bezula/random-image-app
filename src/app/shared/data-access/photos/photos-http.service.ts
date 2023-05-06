import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhotoPagination, Photo } from './photos.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosHttpService {
  constructor(private httpClient: HttpClient) {}

  getPhoto(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(`${environment.baseUrl}/photos/${id}`);
  }

  randomPhotos(page = 1): Observable<PhotoPagination> {
    return this.httpClient.get<PhotoPagination>(
      `${environment.baseUrl}/curated`,
      {
        params: { per_page: 15, page },
      }
    );
  }

  searchPhotos(query: string, page = 1): Observable<PhotoPagination> {
    return this.httpClient.get<PhotoPagination>(
      `${environment.baseUrl}/search`,
      {
        params: { query, per_page: 15, page },
      }
    );
  }
}
