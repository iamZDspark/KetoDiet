import { DietType } from './diettype';

export interface Ingredients {
    id: number;
    name: string;
    category: string;
    diettype?:DietType;
}