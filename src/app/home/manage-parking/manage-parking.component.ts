import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonInput,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, mail, warning } from 'ionicons/icons';
@Component({
  selector: 'app-manage-parking',
  standalone: true,
  templateUrl: './manage-parking.component.html',
  styleUrls: ['./manage-parking.component.scss'],
  imports: [IonIcon, IonItem, IonInput, IonButton],
})
export class ManageParkingComponent {
  constructor() {
    addIcons({ camera, mail, warning });
  }
}
