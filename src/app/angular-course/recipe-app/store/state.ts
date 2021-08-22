import { Ingredient } from "../shared/Ingredient.model";

export const initialState = {
    ingredients: [
        new Ingredient("salt", 2),
        new Ingredient("bread", 1)
    ]
};
