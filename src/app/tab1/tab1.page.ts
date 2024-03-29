import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  coordinates: any;
  private map!: L.Map;

  constructor() {
    this.loadCoordinates();
  }

  async loadCoordinates() {
    try {
      this.coordinates = await Geolocation.getCurrentPosition();
      console.log(this.coordinates.coords.latitude);
      this.initializeMap();
    } catch (error) {
      console.error('Greška u dobivanju lokacije:', error);
    }
  }
  private initializeMap() {
    if (this.coordinates) {
      this.map = L.map('mapId').setView(
        [this.coordinates.coords.latitude, this.coordinates.coords.longitude],
        20
      );
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Napravio Ivano Uglik, bTR',
      }).addTo(this.map);
    } else {
      console.error('Koordinate nisu dostupne.');
    }
  }
}
