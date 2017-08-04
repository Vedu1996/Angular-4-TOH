import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { HeroComponent }     from '../hero/hero.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
  ]
})
export class AppRoutingModule { }
export const routingModules = [HeroComponent, DashboardComponent, HeroDetailComponent];
