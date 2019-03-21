
import { Component } from '@angular/core';



@Component({
  selector: 'home-page',
  styleUrls: ['home.component.scss'],
  template: `
  
  <home-header fixed></home-header>
  
  <nb-layout >
  <nb-layout-column>

  <router-outlet></router-outlet>
  </nb-layout-column>
  </nb-layout>
 
  `,
})
export class HomeComponent {

  sticky: boolean = false;
  elementPosition: any;
  constructor() {
    document.getElementById('nb-global-spinner').style.display= 'none';
   }
}
