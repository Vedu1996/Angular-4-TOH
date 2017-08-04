import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroComponent {
  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero:Hero;
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }
  onSelect( hero:Hero ):void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  ngOnInit(){
    this.getHeroes();
  }
  constructor(private heroService:HeroService, private router:Router){}

}
