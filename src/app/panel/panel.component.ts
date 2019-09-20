import { Component } from '@angular/core';

import { MENU_ITEMS } from './panel-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['panel.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PanelComponent {

  menu = MENU_ITEMS;
}
