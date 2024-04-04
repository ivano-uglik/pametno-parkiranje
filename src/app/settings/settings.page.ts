import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  IonList,
  IonLabel,
  IonItem,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronForward,
  sunnyOutline,
  personOutline,
  notificationsOutline,
  duplicateOutline,
  briefcaseOutline,
  chevronBack,
} from 'ionicons/icons';
import { getVocative } from 'vocative';
@Component({
  selector: 'app-settings-route',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
})
export class SettingsPage {
  constructor() {
    addIcons({
      chevronForward,
      sunnyOutline,
      personOutline,
      notificationsOutline,
      duplicateOutline,
      briefcaseOutline,
      chevronBack,
    });
  }
  name = getVocative('Ivan');
}
