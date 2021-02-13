import { Component, OnInit } from '@angular/core';
import { IRecipeMenu } from 'src/model/IRecipeMenu';
import { RecipeMenuService } from 'src/services/recipe-menu/recipe-menu-service/recipe-menu.service';

@Component({
  selector: 'app-recipe-menu',
  templateUrl: './recipe-menu.component.html',
  styleUrls: ['./recipe-menu.component.css']
})
export class RecipeMenuComponent implements OnInit {

  recipemenu: IRecipeMenu[] = [];
  
  constructor(public recipemenuService: RecipeMenuService) { }
  
  ngOnInit(): void {
    this.recipemenuService.getAll().subscribe((data: IRecipeMenu[])=>{
      this.recipemenu = data;
      console.log(this.recipemenu);
    })  
  }
  
  deleterecipemenu(id){
    this.recipemenuService.delete(id).subscribe(res => {
         this.recipemenu = this.recipemenu.filter(item => item.id !== id);
         console.log('recipemenu deleted successfully!');
    })

}
}
