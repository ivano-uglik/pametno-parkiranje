import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
} from '@ionic/angular/standalone';
import * as L from 'leaflet';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  private map!: L.Map;

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([45.55742, 18.68733], 20);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Koristi OpenStreetMap',
    }).addTo(this.map);
  }
}
