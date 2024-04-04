import { Component, inject } from '@angular/core';
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    HttpClientModule,
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
      this.fetchData(e.latlng.lat, e.latlng.lng);
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
  geoJSONFeature = [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [19.00108, 45.35346],
            [19.00262, 45.35399],
            [19.00239, 45.35425],
            [19.0026, 45.35431],
            [19.00329, 45.35356],
            [19.00292, 45.35346],
            [19.00279, 45.35372],
            [19.00121, 45.35322],
            [19.00108, 45.35346],
          ],
        ],
      },
    },
  ];
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
      // @ts-ignore
      L.geoJson(this.geoJSONFeature).addTo(this.map);
    } else {
      console.error('Coordinates are not available.');
    }
  }
  httpClient = inject(HttpClient);
  address!: any;
  fetchData(lat: number, lon: number) {
    this.httpClient
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      )
      .subscribe((data: any) => {
        this.address = data.address;
        console.log(data.address);
      });
  }

  getPrimaryLocation(): string {
    // if street selected, return street
    // if in street there is an amenity (shopping mall, movie theater etc.) return amenity
    // if in street there is house number, return street + house number

    // Kolodvorska ulica
    // Osnovna škola Dragutina Tadijanovića
    // Ulica Stjepana Radića, 13
    if (this.address) {
      if (this.address.amenity) {
        return this.address.amenity;
      } else if (this.address.house_number) {
        return `${this.address.road}, ${this.address.house_number}`;
      }
      return this.address.road;
    }
    return 'Pametno Parkiranje';
  }
  getSecondaryLocation(): string {
    if (this.address) {
      if (this.address.suburb) {
        return this.address.suburb;
      } else if (this.address.village) {
        return this.address.village;
      } else if (this.address.town) {
        return this.address.town;
      } else if (this.address.municipality) {
        return this.address.municipality;
      }
    }
    return '';
  }
}
