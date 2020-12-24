import { Component, OnInit } from '@angular/core';
import { DietType } from 'src/model/diettype';
import { DietTypeService } from 'src/services/diet-type/diet-type.service';


@Component({
  selector: 'app-diet-type',
  templateUrl: './diet-type.component.html',
  styleUrls: ['./diet-type.component.css']
})
export class DietTypeComponent implements OnInit {

  diettype: DietType[] = [];
  
  constructor(public diettypeService: DietTypeService) { }
  
  ngOnInit(): void {
    this.diettypeService.getAll().subscribe((data: DietType[])=>{
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
