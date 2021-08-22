import { Action } from "@ngrx/store";

import * as actionTypes from './actionTypes';
import { Ingredient } from "../../shared/Ingredient.model";

export class addIngredientAction implements Action {
    readonly type: string = actionTypes.ADD_INGREDIENT;
    payload: Ingredient;
    
    // constructor(public payload: Ingredient) {}
}