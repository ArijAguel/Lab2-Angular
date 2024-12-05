import { Component, Input } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css'],
})
export class CvItemComponent {
  @Input() cv!: Cv;
}
