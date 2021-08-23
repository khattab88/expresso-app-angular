import { Ingredient } from "../shared/Ingredient.model";

export interface ShoppingListState {
    ingredients: Ingredient[];
}

export const initialState: ShoppingListState = {
    ingredients: [
        new Ingredient("salt", 2),
        new Ingredient("bread", 1)
    ]
};
