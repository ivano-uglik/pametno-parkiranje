import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.page.html',
  styleUrls: ['./plates.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlatesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
