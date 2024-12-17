import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  backgroundColor: string = 'lightblue';  // Couleur initiale de fond

  // Méthode pour changer la couleur de fond à partir du Child
  changeBackgroundColor(event: Event): void {
    const target = event.target as HTMLInputElement; // Caster le type vers HTMLInputElement
    if (target && target.value) {
      this.backgroundColor = target.value; // Met à jour la couleur de fond
    } else {
      console.error('L\'élément target est invalide ou n\'a pas de propriété "value".');
    }
  }
  
}
