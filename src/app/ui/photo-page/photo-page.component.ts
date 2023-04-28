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

  comments$ = new BehaviorSubject<string[] | null>(null);
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosHttpService
  ) {}

  toUpperCase(label: string) {
    console.count('e');
    return label.toUpperCase();
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    let comments: string[] = [];
    for (let index = 0; index < 100; index++) {
      comments.push('test');
    }

    // this.comments$.next(comments);
    // const comment = this.commentControl.getRawValue();
    // this.comments$.next(
    //   this.comments$.value ? [...this.comments$.value, comment] : [comment]
    // );
  }
}
