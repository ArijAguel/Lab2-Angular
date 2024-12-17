import { Component, Output, EventEmitter,Input } from '@angular/core';
import { CvService } from '../services/cv.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  myFavoriteColor: string = 'lightgreen';  
  colorChanged: EventEmitter<string> = new EventEmitter(); 


  @Input() color: string = '';
  changeColor(): void {
    this.colorChanged.emit(this.myFavoriteColor);  // Envoi de la couleur au parent
  }
}
