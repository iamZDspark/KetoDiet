import { MealType } from './mealtype';
import { Ingredients } from './Ingredients';

export interface RecipeMenu {
    id: number;
    mealtype?: MealType;
    ingredients?: Ingredients;
}