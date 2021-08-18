import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Ingredient } from '../Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  ingredientsChanged = new Subject<Ingredient[]>();

  constructor() {
   }

   getIngredients(): Ingredient[] {
     return this.ingredients;
   }

   addIngredient(ingredient: Ingredient): void {
     if(!ingredient) return;

     this.ingredients.push(ingredient);
     this.ingredientsChanged.next(this.ingredients);
   }

   addIngredients(ingredients: Ingredient[]): void {
     if(!ingredients.length) return;

     this.ingredients.push(...ingredients);
     this.ingredientsChanged.next(this.ingredients);
   }
}
