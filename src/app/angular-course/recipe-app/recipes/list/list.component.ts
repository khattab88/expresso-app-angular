import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
    this.recipes = [
      new Recipe("Recipe 1", "this is recipe 1", 
                 "https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg"),
      new Recipe("Recipe 2", "this is recipe 2", 
                 "https://i0.hippopx.com/photos/195/737/99/spring-roll-spring-roll-materials-spring-roll-ingredient-materials-preview.jpg")
    ];
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }

}
