import { IDietType } from "./IDietType";
import { IMealType } from "./IMealType";
import { INutrientsType } from "./INutrientsType";

export interface IDietPlan {
    id: string;
    mealtype?: IMealType
    daycounter: string
    nutrientstype?: INutrientsType
    diettype?: IDietType
}