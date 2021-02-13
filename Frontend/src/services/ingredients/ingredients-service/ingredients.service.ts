import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IIngredients } from '../../../model/IIngredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  
  constructor(private ingredient: IngredientsService) { }

  getAll(): Observable<IIngredients[]> {
    return this.ingredient.getAll();
  }

  create(post): Observable<IIngredients> {
    return this.ingredient.create(post);
  }

  find(id): Observable<IIngredients> {
    return this.ingredient.find(id);
  }

  update(id, post): Observable<IIngredients> {
    return this.ingredient.update(id, post);
  }

  delete(id) {
    return this.ingredient.delete(id);
  }
}
