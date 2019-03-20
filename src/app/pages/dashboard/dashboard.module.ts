import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
   
  ],
  providers: [

  ],

})
export class DashboardModule { }
