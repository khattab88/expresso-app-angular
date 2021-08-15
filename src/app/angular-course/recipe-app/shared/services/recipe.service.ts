import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    const recipes = [
      new Recipe("Recipe 1", "this is recipe 1",
        "https://p1.pxfuel.com/preview/4/17/111/recipe-comisa-healthy-tomato.jpg"),
      new Recipe("Recipe 2", "this is recipe 2",
        "https://i0.hippopx.com/photos/195/737/99/spring-roll-spring-roll-materials-spring-roll-ingredient-materials-preview.jpg"),
      new Recipe("Recipe 3", "this is recipe 3",
        "https://i0.hippopx.com/photos/195/737/99/spring-roll-spring-roll-materials-spring-roll-ingredient-materials-preview.jpg")
    ];

    return of(recipes);
  }
}
