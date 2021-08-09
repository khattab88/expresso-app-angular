import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    console.log("form submitted!!!");
  }

  newHero() {
    this.model = new Hero(20, "ali", "hiding", "super");
  }

}
