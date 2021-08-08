import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messagesService: MessagesService) {
   }

  ngOnInit(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.add(`Heroes Component: select hero with id ${hero.id}`)
  }

}