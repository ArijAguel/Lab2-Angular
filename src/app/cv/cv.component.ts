import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';
import { Cv } from '../models/cv.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvList = [
    {
      id: 1,
      nom: 'Inna',
      prenom: 'Corman',
      job: 'Product Manager',
      image: 'assets/images/rotating_card_profile.png',
      citation: 'I\'m the new Sinatra, and since I made it here I can make it anywhere.',
      description: 'Web design, Adobe Photoshop, HTML5, CSS3, Corel, and many others...',
      motsCle: 'HTML, CSS, JS, PHP'
    },
    {
      id: 2,
      nom: 'John',
      prenom: 'Doe',
      job: 'Software Engineer',
      image: 'assets/images/rotating_card_profile2.png',
      citation: 'Code is poetry.',
      description: 'Full-stack development, JavaScript frameworks, REST APIs, databases...',
      motsCle: 'JavaScript, Angular, Node.js'
    },
    {
      id: 3,
    nom: 'Jane',
      prenom: 'Smith',
      job: 'UX Designer',
      image: 'assets/images/rotating_card_profile3.png',
      citation: 'Design is intelligence made visible.',
      description: 'User research, wireframes, prototyping, Adobe XD, and Figma...',
      motsCle: 'UX, UI, Figma, Adobe XD'
    }
  ];

  selectedCv: Cv | null = null;

  constructor(
    public cvService: CvService,
    public embaucheService: EmbaucheService,
    public toastr: ToastrService 

  ) {}

  ngOnInit(): void {
    this.loadCvList();
  }

  loadCvList(): void {
    this.cvService.getCvs().subscribe(
      (data: Cv[]) => {
        this.cvList = data;  // Affecter les CVs récupérés à la liste
      },
      (error) => {
        // Gérer l'erreur si nécessaire
        this.toastr.error('Une erreur est survenue lors de la récupération des CVs.');
      }
    );
  }
  
  selectCv(cv: any) {
    this.selectedCv = cv; // Update selected CV
  }

  embaucher(cv: Cv) {
    if (this.embaucheService.addEmbauche(cv)) {
      this.toastr.success(`${cv.prenom} ${cv.nom} a été embauché avec succès !`);
    } else {
      this.toastr.error(`${cv.prenom} ${cv.nom} est déjà embauché.`);
    }  }

    

    deleteCv(cv: Cv): void {
      this.cvService.deleteCv(cv.id); // Supprimer le CV du service
      this.loadCvList(); // Rafraîchir la liste des CVs
    }
  
    // Méthode pour écouter l'événement de suppression depuis le composant enfant
    handleCvDeletion(cvId: number): void {
      // Mettre à jour la liste des CVs après suppression
      this.cvList = this.cvList.filter(cv => cv.id !== cvId);
    }

}