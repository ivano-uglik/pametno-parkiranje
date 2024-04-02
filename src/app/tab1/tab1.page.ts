import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { getVocative } from 'vocative';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import { addIcons } from 'ionicons';
import { settings } from 'ionicons/icons';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonSearchbar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
})
export class Tab1Page {
  coordinates: any;
  private map!: L.Map;
  constructor() {
    this.loadCoordinates();
    addIcons({ settings });
  }
  carIcon = L.icon({
    iconUrl: '../../assets/car-icon.svg',
    iconSize: [48, 48],
  });
  async loadCoordinates() {
    await Geolocation.requestPermissions();
    this.coordinates = await Geolocation.getCurrentPosition();
    this.initializeMap();
  }
  private initializeMap() {
    if (this.coordinates) {
      this.map = L.map('mapId', {
        zoomControl: false,
        attributionControl: false,
      }).setView(
        [this.coordinates.coords.latitude, this.coordinates.coords.longitude],
        20
      );
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        this.map
      );
      L.marker(
        [this.coordinates.coords.latitude, this.coordinates.coords.longitude],
        { icon: this.carIcon }
      ).addTo(this.map);
    } else {
      console.error('Koordinate nisu dostupne.');
    }
  }
}
