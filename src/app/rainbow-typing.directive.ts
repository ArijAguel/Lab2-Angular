import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type="text"][appRainbowTyping]'  // S'applique seulement aux inputs de type text
})
export class RainbowTypingDirective {
  //les couleurs du Rainbow
  private colors: string[] = ['#FF5733', '#33FF57', '#3357FF', '#FF33FF', '#F3FF33', '#33FFF6'];

  // Liaison de la couleur de texte et de bordure
  @HostBinding('style.color') textColor: string = '';
  @HostBinding('style.borderColor') borderColor: string = '';
  

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeColor();
  }

  // Génère une couleur aléatoire à partir de la liste des couleurs
  private getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }

  // Change la couleur du texte et de la bordure
  private changeColor(): void {
    const randomColor = this.getRandomColor();
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }

  // Ecoute de l'événement 'keyup' pour changer la couleur à chaque lettre
  @HostListener('keyup') onKeyUp(): void {
    this.changeColor();
  }
}
