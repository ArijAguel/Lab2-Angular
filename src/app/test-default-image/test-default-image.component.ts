import { Component } from '@angular/core';

@Component({
  selector: 'app-test-default-image',
  templateUrl: './test-default-image.component.html',
  styleUrls: ['./test-default-image.component.css']
})
export class TestDefaultImageComponent {
  images: string[] = [
    'assets/images/rotating_card_profile.png', // Une image valide
    '',                         // Une chaîne vide
    '   ',                      // Une chaîne contenant uniquement des espaces
    'assets/images/rotating_card_profile2.png', // Une autre image valide
  ];
}
