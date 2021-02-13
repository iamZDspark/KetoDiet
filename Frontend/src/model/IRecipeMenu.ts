import { IMealType } from './IMealType';
import { IIngredients } from './IIngredients';

export interface IRecipeMenu {
    id: number;
    mealtype?: IMealType;
    ingredients?: IIngredients;
}