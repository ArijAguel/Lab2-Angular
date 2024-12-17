import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of , Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr'; 

@Injectable({
  providedIn: 'root',
})
export class CvService {

  private apiUrl = 'https://randomapi.com/api/0de6a6ff4b0afe4c74888d0bb8c8ba86';

  private cvList: Cv[] = []; 
  //page12-new subject
  private cvListSubject = new Subject<Cv[]>(); 
  private embaucheCvSubject = new Subject<Cv>(); 

  constructor(private http: HttpClient, private toastr: ToastrService) {}

   // Méthode pour obtenir des CVs factices
   getFakeCvs(): Cv[] {
    return [
      {
        id: 1,
        name: 'Inna',
        firstname: 'Corman',
        job: 'Product Manager',
        age: 30,
        cin:1234,
        path: 'assets/images/rotating_card_profile.png',
        citation: 'I\'m the new Sinatra, and since I made it here I can make it anywhere.',
        description: 'Web design, Adobe Photoshop, HTML5, CSS3, Corel, and many others...',
        motsCle: 'HTML, CSS, JS, PHP'
      },
      {
        id: 2,
        name: 'John',
        firstname: 'Doe',
        job: 'Software Engineer',
        age: 13,
        cin:12634,
        path: 'assets/images/rotating_card_profile2.png',
        citation: 'Code is poetry.',
        description: 'Full-stack development, JavaScript frameworks, REST APIs, databases...',
        motsCle: 'JavaScript, Angular, Node.js'
      },
      {
        id: 3,
        name: 'Jane',
        firstname: 'Smith',
        job: 'UX Designer',
        age: 30,
        cin:134,
        path: 'assets/images/rotating_card_profile3.png',
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
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results), // Assuming the API response structure
      catchError(error => {
        this.toastr.error('Erreur lors de la récupération des CVs.', 'Erreur');
        console.error('Erreur lors de la récupération des CVs:', error);
        this.cvList = this.getFakeCvs();
        return of(this.cvList);
      }),
      tap(cvList => this.cvList = cvList) // Update the cvList after a successful call
    );
  }
  
  
  getCvById(id: number): Cv | undefined {
    return this.cvList.find((cv) => cv.id === id);
  }

  /* // Méthode pour supprimer un CV
   deleteCv(id: number): void {
    const index = this.cvList.findIndex((cv) => cv.id === id);
    if (index !== -1) {
      this.cvList.splice(index, 1); // Supprime le CV de la liste
    }
  }*/
    deleteCv(id: number): void {
      const index = this.cvList.findIndex((cv) => cv.id === id);
      if (index !== -1) {
        this.cvList.splice(index, 1); 
        this.cvListSubject.next(this.cvList); // Notify subscribers of the updated list
      }
    }
    embaucheCv(cv: Cv): void {
      // Notify subscribers that a CV est embauché
      this.embaucheCvSubject.next(cv);
    }
  
    // Return observable to listen for list changes
  getCvListUpdates(): Observable<Cv[]> {
    return this.cvListSubject.asObservable();
  }

  // Return observable to listen for hire events
  getCvEmbaucheUpdates(): Observable<Cv> {
    return this.embaucheCvSubject.asObservable();
  }
}
