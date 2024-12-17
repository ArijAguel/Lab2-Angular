import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent implements OnInit {
  @Input() cv!: Cv;
  //@Output() embaucher = new EventEmitter<Cv>();
  //@Output() deleteCvEvent = new EventEmitter<number>(); // Événement de suppression

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    const foundCv = this.cvService.getCvById(id);

    if (foundCv) {
      this.cv = foundCv;
    } else {
      console.error(`CV with ID ${id} not found.`);
    }
  }

  /*onEmbaucher(): void {
    this.embaucher.emit(this.cv); // Émettre l'événement au parent
  }*/
    onEmbaucher(): void {
      this.cvService.embaucheCv(this.cv); // Notify subscribers that this CV est embauché
    }

  deleteCv(): void {
      this.cvService.deleteCv(this.cv.id); // Supprimer le CV du service
      console.log(`CV avec l'ID ${this.cv.id} supprimé.`);
      this.router.navigate(['/cv']); // Rediriger vers la page des CVs

      // Émettre l'événement de suppression au parent
      //this.deleteCvEvent.emit(this.cv.id);
    
  }
}
