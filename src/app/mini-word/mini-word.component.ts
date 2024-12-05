import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  paragraphColor: string = 'black'; // Couleur par défaut
  fontSize: number = 16; // Taille de police par défaut
  fontFamily: string = 'Arial'; // Police par défaut

  // Liste des polices disponibles
  fonts: string[] = ['Arial', 'Verdana', 'Georgia', 'Courier New', 'Times New Roman'];
}
