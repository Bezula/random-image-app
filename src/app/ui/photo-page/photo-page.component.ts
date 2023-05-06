import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { PhotosHttpService } from 'src/app/shared';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss'],
})
export class PhotoPageComponent {
  photo$ = this.activatedRoute.paramMap.pipe(
    map((params) => params.get('id') || ''),
    switchMap((id) => this.photosService.getPhoto(id))
  );

  commentControl = this.formBuilder.control('');
  readonly label = 'Comment photo';

  comments$ = new BehaviorSubject<string[] | null>(['essa', 'seeeee']);
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosHttpService
  ) {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    let comments: string[] = [];
    for (let index = 0; index < 100; index++) {
      comments.push(this.commentControl.getRawValue());
    }

    this.comments$.next([
      ...comments,
      ...(this.comments$?.value ? this.comments$.value : []),
    ]);
  }
}
