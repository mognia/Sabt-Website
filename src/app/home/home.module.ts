import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { IndexModule } from "./index/index.module";
import { HomeRoutingModule } from './home-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { HeaderComponent } from './components/header/header.component';

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
    HeaderComponent,
  ],


})
export class HomeModule {
}
