import { Component } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {
  
  @Input() nom: string = 'Inna';
  @Input() prenom: string = 'Corman';
  @Input() job: string = 'Product Manager';
  @Input() image: string = 'assets/images/rotating_card_profile.png';
  @Input() citation: string = 'I\'m the new Sinatra, and since I made it here I can make it anywhere.';
  @Input() description: string = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel, and many others...';
  @Input() motsCle: string = 'HTML, CSS, JS, PHP';

}