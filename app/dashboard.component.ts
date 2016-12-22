import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleID: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

heroes: Hero[] = [];
contstructor(private heroService: HeroService){}

ngOnInit(): void{
  this.heroService.getHeroes()
    .then(heroes=> this.heroes = heroes.slice(1,5));
}

}
