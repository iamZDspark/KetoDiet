import { Component, OnInit } from '@angular/core';
import { INutrientsType } from 'src/model/INutrientsType';
import { NutrientsTypeService } from '../../services/nutrients-type/nutrients-type-service/nutrients-type.service';

@Component({
  selector: 'app-nutrients-type',
  templateUrl: './nutrients-type.component.html',
  styleUrls: ['./nutrients-type.component.css']
})
export class NutrientsTypeComponent implements OnInit {

  nutrientstype: INutrientsType[] = [];
  
  constructor(public nutrientstypeService: NutrientsTypeService) { }
  
  ngOnInit(): void {
    this.nutrientstypeService.getAll().subscribe((data: INutrientsType[])=>{
      this.nutrientstype = data;
      console.log(this.nutrientstype);
    })  
  }
  
  deletenutrientstype(id){
    this.nutrientstypeService.delete(id).subscribe(res => {
         this.nutrientstype = this.nutrientstype.filter(item => item.id !== id);
         console.log('nutrientstype deleted successfully!');
    })

}

}
