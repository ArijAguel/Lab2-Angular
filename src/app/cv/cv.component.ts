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

  selectedCv = this.cvList[0]; // Default selected CV

  constructor(
    public cvService: CvService,
    public embaucheService: EmbaucheService,
    public toastr: ToastrService 

  ) {}
  
  selectCv(cv: any) {
    this.selectedCv = cv; // Update selected CV
  }

  embaucher(cv: Cv) {
    if (this.embaucheService.addEmbauche(cv)) {
      this.toastr.success(`${cv.prenom} ${cv.nom} a été embauché avec succès !`);
    } else {
      this.toastr.error(`${cv.prenom} ${cv.nom} est déjà embauché.`);
    }  }

}