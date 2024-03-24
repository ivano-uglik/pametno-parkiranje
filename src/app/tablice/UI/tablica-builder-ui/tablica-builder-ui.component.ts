import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tablica-builder-ui',
  standalone: true,
  templateUrl: './tablica-builder-ui.component.html',
  styleUrls: ['../tablica-ui/tablica-ui.component.scss'],
  imports: [
    IonInput,
    IonItem,
    IonList,
    IonButton,
    IonIcon,
    NgOptimizedImage,
    IonList,
    IonItem,
    IonInput,
  ],
})
export class TablicaBuilderUIComponent {
  constructor() {}
  city: string = 'ZG';
  numbers: string = '1234';
  chars: string = 'AB';
}
