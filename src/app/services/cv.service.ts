import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr'; 

@Injectable({
  providedIn: 'root',
})
export class CvService {

  private apiUrl = 'https://apilb.tridevs.net/explorer/';
  private cvList: Cv[] = []; 
  constructor(private http: HttpClient, private toastr: ToastrService) {}

   // Méthode pour obtenir des CVs factices
   getFakeCvs(): Cv[] {
    return [
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
}

  /*
  getCvs(): Cv[] {
    return this.cvList;
  }
  */

  // Méthode pour récupérer les CVs depuis l'API
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.apiUrl).pipe(
      catchError(error => {
        this.toastr.error('Erreur lors de la récupération des CVs.', 'Erreur');
        console.error('Erreur lors de la récupération des CVs:', error);
        
        // Retourner des CVs factices si une erreur se produit
        this.cvList = this.getFakeCvs();
        return of(this.cvList);
      })
    );
  }
  
  getCvById(id: number): Cv | undefined {
    return this.cvList.find((cv) => cv.id === id);
  }

   // Méthode pour supprimer un CV
   deleteCv(id: number): void {
    const index = this.cvList.findIndex((cv) => cv.id === id);
    if (index !== -1) {
      this.cvList.splice(index, 1); // Supprime le CV de la liste
    }
  }
  
}
