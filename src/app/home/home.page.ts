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
  isOpen = true;
  coordinates!: any;
  map!: L.Map;
  locationMarker: L.Marker | undefined;
  constructor() {
    this.loadCoordinates();
    addIcons({ settings });
  }
  carIcon = L.icon({
    iconUrl: '../../assets/car-icon.svg',
    iconSize: [48, 48],
  });
  locationIcon = L.icon({
    iconUrl: '../../assets/location-sharp.svg',
    iconSize: [48, 48],
  });
  ionViewWillEnter() {
    this.isOpen = true;
  }
  async loadCoordinates() {
    try {
      await Geolocation.requestPermissions();
      this.coordinates = await Geolocation.getCurrentPosition();
    } catch (error) {
      console.error(
        'Error getting coordinates using Capacitor Geolocation API:',
        error
      );
      console.log('Trying HTML Geolocation API...');
      this.coordinates = await this.getHTMLGeolocation();
    }
    this.initializeMap();
    this.map.on('click', (e) => {
      console.log(e.latlng);
      if (this.locationMarker) {
        this.map.removeLayer(this.locationMarker);
      }
      this.locationMarker = L.marker([e.latlng.lat, e.latlng.lng], {
        icon: this.locationIcon,
      }).addTo(this.map);
    });
  }

  private async getHTMLGeolocation(): Promise<Position> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            console.error('HTML Geolocation API error:', error);
            reject(error);
          }
        );
      } else {
        console.error('HTML Geolocation API is not supported.');
        reject(new Error('HTML Geolocation API is not supported.'));
      }
    });
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
      console.error('Coordinates are not available.');
    }
  }
}
