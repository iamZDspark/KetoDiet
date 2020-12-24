import { MealType } from './mealtype';
import { NutrientsType } from './nutrientstype';
import { DietType } from './diettype';

export interface DietPlan {
    id: string;
    mealtype?: MealType;
    daycounter: string;
    nutrientstype?: NutrientsType;
    diettype?: DietType;
}