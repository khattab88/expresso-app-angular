import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { LogService } from 'src/app/angular-course/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [];
  private selectedRecipe: Recipe;

  recipesChanged = new Subject<Recipe[]>();
  recipeSelecetd = new Subject<Recipe>();

  constructor(private shoppingListService: ShoppingListService,
              private logService: LogService) {

    this.recipes = [
      new Recipe("Recipe 1", "this is recipe 1",
        "https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg",
        [
          new Ingredient("bread", 1),
          new Ingredient("salt", 2),
          new Ingredient("meat", 1)
        ]),
      new Recipe("Recipe 2", "this is recipe 2",
        "https://i0.hippopx.com/photos/195/737/99/spring-roll-spring-roll-materials-spring-roll-ingredient-materials-preview.jpg",
        [
          new Ingredient("bread", 1),
          new Ingredient("salt", 2),
          new Ingredient("fish", 3)
        ]),
      new Recipe("Recipe 3", "this is recipe 3",
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg",
        [
          new Ingredient("bread", 1),
          new Ingredient("salt", 2)
        ])
    ];

    this.recipeSelecetd.subscribe((selected: Recipe) => {
      this.selectedRecipe = selected;
      
      this.logService.logToConsole(`selecetd recipe: ${this.selectedRecipe.name}`);
    });
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(index: number) : Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe): void {
    if (!recipe) return;

    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
