import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  public color: string = ''; 

  // Méthode qui met à jour la couleur lorsqu'on écrit dans l'input
  updateColor(newColor: string) {
    this.color = newColor;
  }
  // Méthode pour réinitialiser la couleur par défaut
  resetColor(divElement: HTMLElement) {
    this.color = ''; // Réinitialiser la couleur de la variable
    divElement.style.background = 'white'; // Réinitialiser la couleur du div à blanc
  }

}
