import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { IndexComponent } from './index/index.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'index',
    component: IndexComponent,
  },  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
