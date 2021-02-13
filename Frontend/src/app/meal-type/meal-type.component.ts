import { Component, OnInit } from '@angular/core';
import { IMealType } from 'src/model/IMealType';
import { MealTypeService } from 'src/services/meal-type/meal-type-service/meal-type.service';

@Component({
  selector: 'app-meal-type',
  templateUrl: './meal-type.component.html',
  styleUrls: ['./meal-type.component.css']
})
export class MealTypeComponent implements OnInit {

  mealtype: IMealType[] = [];
  
  constructor(public mealtypeService: MealTypeService) { }
  
  ngOnInit(): void {
    this.mealtypeService.getAll().subscribe((data: IMealType[])=>{
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
