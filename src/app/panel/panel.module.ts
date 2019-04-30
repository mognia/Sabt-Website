import { NgModule } from '@angular/core';

import { PanelComponent } from './panel.component';

import { PagesRoutingModule } from './panel-routing.module';
import { DashboardModule } from "./dashboard/dashboard.module";
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PANEL_COMPONENTS = [
  PanelComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PANEL_COMPONENTS,
  ],


})
export class PanelModule {
}
