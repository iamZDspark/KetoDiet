import { Component, OnInit } from '@angular/core';
import { MealType } from 'src/model/mealtype';
import { MealTypeService } from 'src/services/meal-type/meal-type.service';

@Component({
  selector: 'app-meal-type',
  templateUrl: './meal-type.component.html',
  styleUrls: ['./meal-type.component.css']
})
export class MealTypeComponent implements OnInit {

  mealtype: MealType[] = [];
  
  constructor(public mealtypeService: MealTypeService) { }
  
  ngOnInit(): void {
    this.mealtypeService.getAll().subscribe((data: MealType[])=>{
      this.mealtype = data;
      console.log(this.mealtype);
    })  
  }
  
  deletemealtype(id){
    this.mealtypeService.delete(id).subscribe(res => {
         this.mealtype = this.mealtype.filter(item => item.id !== id);
         console.log('mealtype deleted successfully!');
    })

}


}
