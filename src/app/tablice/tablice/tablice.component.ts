import { Component, OnInit, inject } from '@angular/core';
import { TablicaUIComponent } from '../UI/tablica-ui/tablica-ui.component';
import { TabliceServiceService } from '../tablice-service.service';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addSharp, informationCircleOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tablice',
  standalone: true,
  templateUrl: './tablice.component.html',
  styleUrls: ['./tablice.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    TablicaUIComponent,
    TablicaUIComponent,
    RouterLink,
  ],
})
export class TabliceComponent {
  tabliceProvider = inject(TabliceServiceService);
  constructor() {
    addIcons({ informationCircleOutline, addSharp });
  }
}
