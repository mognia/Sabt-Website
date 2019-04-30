
import { Component } from '@angular/core';



@Component({
  selector: 'home-page',
  styleUrls: ['home.component.scss'],
  templateUrl:'./home.component.html',
})
export class HomeComponent {

  sticky: boolean = false;
  elementPosition: any;
  constructor() {
    document.getElementById('nb-global-spinner').style.display= 'none';
   }
}
