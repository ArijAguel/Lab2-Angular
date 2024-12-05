import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, defaultPath: string = 'assets/images/default-image.png'): string {
    // Vérifie si la valeur est une chaîne vide ou contient uniquement des espaces
    if (!value || value.trim() === '') {
      return defaultPath; // Retourne le chemin par défaut
    }
    return value; // Sinon, retourne la valeur fournie
  }
}
