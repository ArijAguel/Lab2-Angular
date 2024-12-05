import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  backgroundColor: string = 'lightblue';  // Couleur initiale de fond

  // Méthode pour changer la couleur de fond à partir du Child
  changeBackgroundColor(color: string): void {
    this.backgroundColor = color;
  }
}
