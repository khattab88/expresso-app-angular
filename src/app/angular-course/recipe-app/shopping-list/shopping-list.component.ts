import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'recipe-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class RecipeShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }

}
