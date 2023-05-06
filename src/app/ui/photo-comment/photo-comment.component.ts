import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-comment',
  templateUrl: './photo-comment.component.html',
  styleUrls: ['./photo-comment.component.scss'],
})
export class PhotoCommentComponent {
  @Input() comment!: string;

  toUpperCase(label: string) {
    return label.toUpperCase();
  }
}
