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
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tablica-ui',
  standalone: true,
  templateUrl: './tablica-ui.component.html',
  styleUrls: ['./tablica-ui.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    NgOptimizedImage,
    RouterLink,
  ],
})
export class TablicaUIComponent {
  tabliceProvider = inject(TabliceServiceService);
  @Input() city!: string;
  @Input() numbers!: string;
  @Input() chars!: string;
  @Input() index!: string;

  transformIndex(index: string) {
    switch (this.index) {
      case '0':
        return 'first';
        break;
      case '1':
        return 'second';
        break;
      case '2':
        return 'third';
        break;
      default:
        return '';
        break;
    }
  }
  constructor() {
    addIcons({ addSharp, createSharp, trashSharp });
  }
  onDeleteClick(index: string) {
    const numericIndex = parseInt(index); // Convert index string to number
    if (!isNaN(numericIndex)) {
      const updatedTablice = this.tabliceProvider
        .tablice()
        .filter((_, idx) => idx !== numericIndex);
      this.tabliceProvider.tablice.set(updatedTablice); // Update the array in the provider
    }
    console.log(this.tabliceProvider.tablice());
  }
}
