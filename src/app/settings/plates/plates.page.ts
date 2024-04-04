import { Component, ViewChild, inject } from '@angular/core';
import { TablicaUIComponent } from './tablica-ui/tablica-ui.component';
import { TabliceServiceService } from './tablice-service.service';
import {
  IonIcon,
  IonButton,
  IonInput,
  IonItem,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonModal,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp, informationCircleOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-plates-route',
  templateUrl: 'plates.page.html',
  styleUrls: ['plates.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonModal,
    IonTitle,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    TablicaUIComponent,
    TablicaUIComponent,
    RouterLink,
    FormsModule,
  ],
})
export class PlatesPage {
  city!: string;
  numbers!: string;
  chars!: string;
  @ViewChild(IonModal) modal!: IonModal;
  tabliceProvider = inject(TabliceServiceService);
  constructor() {
    addIcons({ informationCircleOutline, addSharp });
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
    const newTablica = {
      city: this.city,
      numbers: this.numbers,
      chars: this.chars,
    };
    this.tabliceProvider.tablice.update((values) => [...values, newTablica]);
    this.city = '';
    this.numbers = '';
    this.chars = '';
  }
}
