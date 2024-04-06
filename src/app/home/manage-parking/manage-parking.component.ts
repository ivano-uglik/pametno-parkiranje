import { Component, OnInit, inject } from '@angular/core';
import {
  IonButton,
  IonInput,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, mail, warning } from 'ionicons/icons';
import { ManageParkingService } from '../manageParking/manage-parking.service';
@Component({
  selector: 'app-manage-parking',
  standalone: true,
  templateUrl: './manage-parking.component.html',
  styleUrls: ['./manage-parking.component.scss'],
  imports: [IonIcon, IonItem, IonInput, IonButton],
})
export class ManageParkingComponent {
  manageParkingService = inject(ManageParkingService);
  constructor() {
    addIcons({ camera, mail, warning });
  }
}
