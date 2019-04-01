
import { Component } from '@angular/core';



@Component({
  selector: 'home-page',
  styleUrls: ['home.component.scss'],
  template: `
  <nb-layout >
  <nb-layout-column>
  <home-header fixed ></home-header>
  <home-features ></home-features>
  <docs-section></docs-section>
  <news-feed-section></news-feed-section>
  <download-section></download-section>
  <home-footer></home-footer>
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
