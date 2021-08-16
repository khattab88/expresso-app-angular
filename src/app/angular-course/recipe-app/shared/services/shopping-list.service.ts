import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] =  [];

  constructor() {
    // this.ingredients = [
    //   new Ingredient("ingredient 1", 1),
    //   new Ingredient("ingredient 2", 3),
    //   new Ingredient("ingredient 3", 2),
    //   new Ingredient("ingredient 4", 1)
    // ];
   }

   getIngredients(): Observable<Ingredient[]> {
     return of(this.ingredients);
   }

   addIngredient(ingredient: Ingredient): void {
     if(!ingredient) return;

     this.ingredients.push(ingredient);
   }

   addIngredients(ingredients: Ingredient[]): void {
     if(!ingredients.length) return;

     this.ingredients.push(...ingredients);
   }
}
