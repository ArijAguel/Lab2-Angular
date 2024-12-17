import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from '../models/person.model'; // Remplacez par votre modèle de données

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personSubject = new Subject<Person>();
  personSelected$ = this.personSubject.asObservable();

  selectPerson(person: Person): void {
    this.personSubject.next(person);
  }
}
