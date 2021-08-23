import { ActionReducerMap } from '@ngrx/store';

import { ShoppingListState } from "../state";
import { ShoppingListReducer } from "./shopping-list.reducer";

export const rootReducer = {};

export interface AppState {
    shoppingList: ShoppingListState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: ShoppingListReducer
};