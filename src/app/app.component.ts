import { Component } from '@angular/core';
import { Medicine } from './model/medicine';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Graciela', url: '/folder/Graciela', icon: 'woman' },
    { title: 'Juan', url: '/folder/Juan', icon: 'man' },   
  ];
 
  constructor() {
   
  }
}
