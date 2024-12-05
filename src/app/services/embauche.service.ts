import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embaucheList: Cv[] = [];

  embaucher(cv: Cv): void {
    if (!this.embaucheList.includes(cv)) {
      this.embaucheList.push(cv);
    }
  }

  getEmbaucheList(): Cv[] {
    return this.embaucheList;
  }

  addEmbauche(cv: any): boolean {
    if (!this.embaucheList.includes(cv)) {
      this.embaucheList.push(cv);
      return true; // CV ajouté
    }
    return false; // CV déjà présent
  }
  
}
