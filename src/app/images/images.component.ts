import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  template: `
    <div class="images-container" [style.width.px]="width" [style.height.px]="height">
      <img [src]="currentImage$ | async" [alt]="altText" [style.width.px]="width" [style.height.px]="height" />
    </div>
  `,
  styles: [
    `
      img {
        border-radius: 50%;
         padding: 5px;
      }
    `,
  ],
})
export class ImagesComponent implements OnInit {
  @Input() images: string[] = []; // Liste des images
  @Input() intervalTime: number = 2000; // Temps entre chaque image (ms)
  @Input() width: number = 300; // Largeur de l'image (px)
  @Input() height: number = 200; // Hauteur de l'image (px)
  @Input() altText: string = 'Images'; // Texte alternatif pour l'image

  currentImage$!: Observable<string>; // Observable pour l'image actuelle

  ngOnInit(): void {
    // Créer un observable pour alterner entre les images
    this.currentImage$ = interval(this.intervalTime).pipe(
      map((index) => this.images[index % this.images.length]) // Boucler sur les images
    );
  }
}
