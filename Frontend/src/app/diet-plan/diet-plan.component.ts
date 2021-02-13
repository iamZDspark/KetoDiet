import { Component, OnInit } from '@angular/core';
import { IDietPlan } from 'src/model/IDietPlan';
import { DietPlanService } from 'src/services/diet-plan/diet-plan-service/diet-plan.service';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent implements OnInit {

  dietplan: IDietPlan[] = [];
  
  constructor(public dietplanService: DietPlanService) { }
  
  ngOnInit(): void {
    this.dietplanService.getAll().subscribe((data: IDietPlan[])=>{
      this.dietplan = data;
      console.log(this.dietplan);
    })  
  }
  
  deletedietplan(id){
    this.dietplanService.delete(id).subscribe(res => {
         this.dietplan = this.dietplan.filter(item => item.id !== id);
         console.log('dietplan deleted successfully!');
    })
  }

}
