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
  //@Output() cvSelected = new EventEmitter<Cv>();

  constructor(private cvService: CvService) {}

  /*ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (data: Cv[]) => {
        this.cvs = data; // Populate the list with the retrieved data
      },
      (error) => {
        console.error('Error fetching CVs:', error);
        // The error will already be handled and displayed by the service
      }
    );
  }*/
  
    getImagePath(path: string): string {
      return `assets/images/${path}`;
    }
    onSelect(cv: Cv): void {
      console.log('Selected CV:', cv);
      //this.cvSelected.emit(cv);
    }
  
    ngOnInit(): void {
      this.cvService.getCvListUpdates().subscribe((updatedCvs) => {
        this.cvs = updatedCvs; 
      });      

    // Listen for updates to the CV list (deletions, etc.)
    this.cvService.getCvListUpdates().subscribe((updatedCvs) => {
      this.cvs = updatedCvs; // Update the list of CVs
    });

    // Listen for notifications when a CV is embauché
    this.cvService.getCvEmbaucheUpdates().subscribe((embaucheCv) => {
      console.log(`CV embauché:`, embaucheCv);
    });
  }
}
