import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tablice-builder',
  templateUrl: './tablice-builder.page.html',
  styleUrls: ['./tablice-builder.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TabliceBuilderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
