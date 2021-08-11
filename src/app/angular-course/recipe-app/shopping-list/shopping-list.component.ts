import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'recipe-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class RecipeShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.ingredients = [
      new Ingredient("ingredient 1", 1),
      new Ingredient("ingredient 2", 3),
      new Ingredient("ingredient 3", 2)
    ];
  }

}
