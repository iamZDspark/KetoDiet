import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home/home-service/home.service';
import { tabsProperties } from '../../model/ITabsProperties';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //tabsName: Array<string> = [];
  tabsName: Array<tabsProperties> = [];

  constructor(private homeService: HomeService) {
    // this.tabsName = ['About', 'Start Keto', 'Benefits', 'User Info', ' Diet Plan', 'Diet Type', 'Ingredients', 'Meal Type', 'Nutrients Type', 'Recipe Menu'];
  }

  ngOnInit(): void {
   this.tabsName= this.homeService.getTabsData();
  }
}
