import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { IndexModule } from "./index/index.module";
import { HomeRoutingModule } from './home-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
    HomeComponent,
];

@NgModule({
  imports: [
    HomeRoutingModule,
    IndexModule,
    ThemeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],


})
export class HomeModule {
}
