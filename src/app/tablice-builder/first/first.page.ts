import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { TabliceServiceService } from 'src/app/tablice/tablice-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonContent,
    FormsModule,
  ],
})
export class FirstPage {
  tabliceProvider = inject(TabliceServiceService);
  constructor(private router: Router) {}
  city: string = '';
  numbers!: string;
  chars!: string;

  handleClick() {
    // Create a new array to avoid mutating the original WritableSignal
    const updatedTablice = [...this.tabliceProvider.tablice()]; // Spread operator to copy the array

    // Update the 0th element with new values
    updatedTablice[0] = {
      city: this.city,
      numbers: this.numbers,
      chars: this.chars,
    };

    // Update the WritableSignal with the modified array
    this.tabliceProvider.tablice.set(updatedTablice);
    this.router.navigate(['/tabs/tablice']);
  }
}
