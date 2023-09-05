import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/folder/main', icon: 'book' },
    { title: 'Graciela', url: '/folder/Graciela', icon: 'woman' },
    { title: 'Juan', url: '/folder/Juan', icon: 'man' },   
  ];
 
  constructor() {
   
  }
}
