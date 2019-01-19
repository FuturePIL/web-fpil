import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [{
      path: 'homePage',
      loadChildren: './home/home.module#HomeModule',
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'homePage',
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
