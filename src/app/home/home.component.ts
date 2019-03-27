
import { Component } from '@angular/core';



@Component({
  selector: 'home-page',
  styleUrls: ['home.component.scss'],
  template: `
  <nb-layout style="display:none;" >
  </nb-layout>

  
  <home-header fixed ></home-header>
  <home-features ></home-features>
  <docs-section></docs-section>
  `,
})
export class HomeComponent {

  sticky: boolean = false;
  elementPosition: any;
  constructor() {
    document.getElementById('nb-global-spinner').style.display= 'none';
   }
}
