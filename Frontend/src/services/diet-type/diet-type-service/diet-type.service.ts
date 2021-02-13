import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { IDietType } from 'src/model/IDietType';
import { DietPlanService } from 'src/services/diet-plan/diet-plan-service/diet-plan.service';

@Injectable({
  providedIn: 'root'
})
export class DietTypeService {
  constructor(private dietTypeService : DietTypeService) { }
   
  getAll(): Observable<IDietType[]> {
    return this.dietTypeService.getAll();
  }
   
  create(post): Observable<IDietType> {
    return this.dietTypeService.create(post);
  }  
   
  find(id): Observable<IDietType> {
    return this.dietTypeService.find(id);

  }
   
  update(id, post): Observable<IDietType> {
    return this.dietTypeService.update(id, post);
    
  }
   
  delete(id){
    return this.dietTypeService.delete(id);
    
  }
    

}
