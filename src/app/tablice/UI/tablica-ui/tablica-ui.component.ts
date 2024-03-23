import { Component, Input, inject } from '@angular/core';
import {
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { NgOptimizedImage } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  informationCircleOutline,
  addSharp,
  createSharp,
  trashSharp,
} from 'ionicons/icons';
import { TabliceServiceService } from '../../tablice-service.service';
@Component({
  selector: 'app-tablica-ui',
  standalone: true,
  templateUrl: './tablica-ui.component.html',
  styleUrls: ['./tablica-ui.component.scss'],
  imports: [IonButton, IonIcon, IonCol, IonRow, IonGrid, NgOptimizedImage],
})
export class TablicaUIComponent {
  tabliceProvider = inject(TabliceServiceService);
  @Input() city!: string;
  @Input() numbers!: string;
  @Input() chars!: string;
  constructor() {
    addIcons({ addSharp, createSharp, trashSharp });
  }
}
