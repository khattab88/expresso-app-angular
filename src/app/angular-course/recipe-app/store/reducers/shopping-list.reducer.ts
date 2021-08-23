import { Action } from "@ngrx/store";

import { ShoppingListState, initialState } from "../state";
import * as actionTypes from "../actions/actionTypes";
import * as ShoppingListActions from '../actions/shopping-list.actions';

export function ShoppingListReducer(state: ShoppingListState = initialState, action: ShoppingListActions.addIngredientAction) {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
            default:
                return state;
    }
}