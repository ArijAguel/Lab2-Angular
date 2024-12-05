import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvList: Cv[] = [
    {
      id:1,
      nom: 'Inna',
      prenom: 'Corman',
      job: 'Product Manager',
      image: 'assets/images/rotating_card_profile.png',
      citation: 'I\'m the new Sinatra, and since I made it here I can make it anywhere.',
      description: 'Web design, Adobe Photoshop, HTML5, CSS3, Corel, and many others...',
      motsCle: 'HTML, CSS, JS, PHP'
    },
    {
      id:2,
      nom: 'John',
      prenom: 'Doe',
      job: 'Software Engineer',
      image: 'assets/images/rotating_card_profile2.png',
      citation: 'Code is poetry.',
      description: 'Full-stack development, JavaScript frameworks, REST APIs, databases...',
      motsCle: 'JavaScript, Angular, Node.js'
    },
    {
      id:3,
      nom: 'Jane',
      prenom: 'Smith',
      job: 'UX Designer',
      image: 'assets/images/rotating_card_profile3.png',
      citation: 'Design is intelligence made visible.',
      description: 'User research, wireframes, prototyping, Adobe XD, and Figma...',
      motsCle: 'UX, UI, Figma, Adobe XD'
    }
  ];

  getCvs(): Cv[] {
    return this.cvList;
  }
}
