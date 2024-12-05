import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../models/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() cvSelected = new EventEmitter<Cv>();

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }

  onSelect(cv: Cv): void {
    this.cvSelected.emit(cv);
  }
}
