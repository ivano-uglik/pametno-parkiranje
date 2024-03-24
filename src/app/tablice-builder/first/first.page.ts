import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TablicaBuilderUIComponent } from 'src/app/tablice/UI/tablica-builder-ui/tablica-builder-ui.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TablicaBuilderUIComponent],
})
export class FirstPage {
  constructor() {}
}
