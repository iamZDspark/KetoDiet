import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { tabsProperties } from 'src/model/ITabsProperties';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  constructor() { }

   getTabsData(): Array<tabsProperties>{
    let tabsName : Array<tabsProperties> = [];
    tabsName.push({
      tabsName: 'About',
      tabsLink: './about-keto'
    })
    tabsName.push({
      tabsName: 'Start',
      tabsLink: './start-keto'
    })
    tabsName.push({
      tabsName: 'Benifits of Keto ',
      tabsLink: './benifits-keto'
    })
    tabsName.push({
      tabsName: 'User Info',
      tabsLink: './user-info'
    })
    tabsName.push({
      tabsName: 'Diet Plan',
      tabsLink: './diet-plan'
    })
    tabsName.push({
      tabsName: 'Diet Type',
      tabsLink: './diet-type'
    })
    tabsName.push({
      tabsName: 'Ingredients',
      tabsLink: './ingredients'
    })
    tabsName.push({
      tabsName: 'Meal Type',
      tabsLink: './meal-type'
    })
    tabsName.push({
      tabsName: 'Nutrients Type',
      tabsLink: './nutrients-type'
    })
    tabsName.push({
      tabsName: 'Recipe Menu',
      tabsLink: './recipe-menu'
    })
    return tabsName;
  }
}
