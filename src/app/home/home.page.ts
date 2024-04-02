import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  IonContent,
  IonSearchbar,
  IonIcon,
  IonModal,
} from '@ionic/angular/standalone';
import { Geolocation, Position } from '@capacitor/geolocation';
import * as L from 'leaflet';
import { addIcons } from 'ionicons';
import { settings } from 'ionicons/icons';
@Component({
  selector: 'app-home-route',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonIcon,
    IonModal,
    IonContent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
})
export class HomePage {
  coordinates!: Position;
  map!: L.Map;
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
