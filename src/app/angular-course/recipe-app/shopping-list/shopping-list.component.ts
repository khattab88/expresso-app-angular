import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'recipe-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class RecipeShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientsChangedSubscribtion: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    // this.shoppingListService.getIngredients()
    //   .subscribe(ingredients => this.ingredients = ingredients);

    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangedSubscribtion = this.shoppingListService.ingredientsChanged
      .subscribe(ingredients => {
        this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.ingredientsChangedSubscribtion.unsubscribe();
  }

}
