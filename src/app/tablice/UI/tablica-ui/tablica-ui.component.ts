import { Component, Input, ViewChild, inject } from '@angular/core';
import {
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonButton,
  IonModal,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
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
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tablica-ui',
  standalone: true,
  templateUrl: './tablica-ui.component.html',
  styleUrls: ['./tablica-ui.component.scss'],
  imports: [
    IonInput,
    IonItem,
    IonList,
    IonContent,
    IonTitle,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonModal,
    IonButton,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    NgOptimizedImage,
    RouterLink,
    FormsModule,
  ],
})
export class TablicaUIComponent {
  @ViewChild(IonModal) modal!: IonModal;
  tabliceProvider = inject(TabliceServiceService);
  @Input() city!: string;
  @Input() numbers!: string;
  @Input() chars!: string;
  @Input() index!: string;
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

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm(index: string) {
    this.modal.dismiss('confirm');
    const newTablica = {
      city: this.city,
      numbers: this.numbers,
      chars: this.chars,
    };
    // Create a new array to avoid mutating the original WritableSignal
    const updatedTablice = [...this.tabliceProvider.tablice()]; // Spread operator to copy the array

    // Update the 0th element with new values
    updatedTablice[parseInt(index)] = {
      city: this.city,
      numbers: this.numbers,
      chars: this.chars,
    };

    // Update the WritableSignal with the modified array
    this.tabliceProvider.tablice.set(updatedTablice);
  }
}
