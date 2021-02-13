import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMealType } from 'src/model/IMealType';

@Injectable({
  providedIn: 'root'
})
export class MealTypeService {
  
  constructor(private mealType: MealTypeService) { }
   
  getAll(): Observable<IMealType[]> {
    return this.mealType.getAll();
  }
   
  create(post): Observable<IMealType> {
    return this.mealType.create(post);
  }  
   
  find(id): Observable<IMealType> {
    return this.mealType.find(id);
  }
   
  update(id, post): Observable<IMealType> {
    return this.mealType.update(id, post);
  }
   
  delete(id){
    return this.mealType.delete(id);
  }
}
