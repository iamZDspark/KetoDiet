import { Component, OnInit } from '@angular/core';
import { IDietType } from '../../model/IDietType';
import { DietTypeService } from '../../services/diet-type/diet-type-service/diet-type.service';


@Component({
  selector: 'app-diet-type',
  templateUrl: './diet-type.component.html',
  styleUrls: ['./diet-type.component.css']
})
export class DietTypeComponent implements OnInit {

  diettype: IDietType[] = [];
  
  constructor(public diettypeService: DietTypeService) { }
  
  ngOnInit(): void {
    this.diettypeService.getAll().subscribe((data: IDietType[])=>{
      this.diettype = data;
      console.log(this.diettype);
    })  
  }
  
  deletediettype(id){
    this.diettypeService.delete(id).subscribe(res => {
         this.diettype = this.diettype.filter(item => item.id !== id);
         console.log('diettype deleted successfully!');
    })

}
}
