import { IDietType } from './IDietType';

export interface IIngredients {
    id: number;
    name: string;
    category: string;
    diettype?:IDietType;
}