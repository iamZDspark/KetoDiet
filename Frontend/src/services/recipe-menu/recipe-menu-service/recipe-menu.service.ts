import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IRecipeMenu } from 'src/model/IRecipeMenu';
@Injectable({
  providedIn: 'root'
})
export class RecipeMenuService {
  constructor(private recipeMenu : RecipeMenuService) { }
   
  getAll(): Observable<IRecipeMenu[]> {
    return this.recipeMenu.getAll();
  }
   
  create(post): Observable<IRecipeMenu> {
    return this.recipeMenu.create(post);
  }  
   
  find(id): Observable<IRecipeMenu> {
    return this.recipeMenu.find(id);
  }
   
  update(id, post): Observable<IRecipeMenu> {
    return this.recipeMenu.update(id, post);
  }
   
  delete(id){
    return this.recipeMenu.delete(id);
    
  }
}
