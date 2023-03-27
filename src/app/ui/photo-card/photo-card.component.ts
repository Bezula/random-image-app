import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/shared';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
}
