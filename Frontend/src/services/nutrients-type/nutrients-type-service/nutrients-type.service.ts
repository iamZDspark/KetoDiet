import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { INutrientsType } from '../../../model/INutrientsType';

@Injectable({
  providedIn: 'root'
})
export class NutrientsTypeService {
  
  constructor(private nutrientTypeService : NutrientsTypeService) { }
   
  getAll(): Observable<INutrientsType[]> {
    return this.nutrientTypeService.getAll();
  }
   
  create(post): Observable<INutrientsType> {
    return this.nutrientTypeService.create(post);
  }  
   
  find(id): Observable<INutrientsType> {
    return this.nutrientTypeService.find(id);
  }
   
  update(id, post): Observable<INutrientsType> {
    return this.nutrientTypeService.update(id, post);
  }
   
  delete(id){
    return this.nutrientTypeService.delete(id);
  }
    
}
