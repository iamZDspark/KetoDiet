import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/model/ingredients';
import { IngredientsService } from 'src/services/ingredients/ingredients.service';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredients[] = [];
  
  constructor(public ingredientsService: IngredientsService) { }
  
  ngOnInit(): void {
    this.ingredientsService.getAll().subscribe((data: Ingredients[])=>{
      this.ingredients = data;
      console.log(this.ingredients);
    })  
  }
  
  deleteingredients(id){
    this.ingredientsService.delete(id).subscribe(res => {
         this.ingredients = this.ingredients.filter(item => item.id !== id);
         console.log('ingredients deleted successfully!');
    })

}

}
