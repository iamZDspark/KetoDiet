import { DietType } from './diettype';

export interface UserInfo {
    id: number;
    username?: UserInfo;
    weight: string;
    height: string;
    diettype?: DietType;
    asigndietplan:string;
    dietplan:string;
}