import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';
import { AppRoutingModule, routingModules } from './app-routing/app-routing.module';
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    routingModules
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
