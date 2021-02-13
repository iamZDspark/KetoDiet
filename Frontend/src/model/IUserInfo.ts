import { IDietType } from './IDietType';
import { IDietPlan } from './IDietPlan';

export interface IUserInfo {
    id: number;
    username?: IUserInfo;
    weight: string;
    height: string;
    diettype?: IDietType;
    asigndietplan:string;
    dietplan?: IDietPlan;
}