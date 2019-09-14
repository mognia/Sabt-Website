import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Utc2jalaliPipe } from './utc2jalali.pipe';
@NgModule({
  declarations: [Utc2jalaliPipe],
  imports: [
    CommonModule
  ],
  exports:[
    Utc2jalaliPipe
  ]
})
export class PipeModule {
  static forRoot() {
    return {
        ngModule: PipeModule,
        providers: [],
    };
 }
 }
