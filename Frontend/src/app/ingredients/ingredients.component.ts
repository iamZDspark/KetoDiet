import { Component, OnInit } from '@angular/core';
import { IIngredients } from 'src/model/IIngredients';
import { IngredientsService } from '../../services/ingredients/ingredients-service/ingredients.service';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredients: IIngredients[] = [];
  
  constructor(public ingredientsService: IngredientsService) { }
  
  ngOnInit(): void {
    this.ingredientsService.getAll().subscribe((data: IIngredients[])=>{
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
