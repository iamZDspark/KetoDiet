import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecipeMenu } from 'src/model/recipemenu';
@Injectable({
  providedIn: 'root'
})
export class RecipeMenuService {

  private apiURL = "http://localhost:5009/api/RecipeMenu";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<RecipeMenu[]> {
    return this.httpClient.get<RecipeMenu[]>(this.apiURL + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(post): Observable<RecipeMenu> {
    return this.httpClient.post<RecipeMenu>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<RecipeMenu> {
    return this.httpClient.get<RecipeMenu>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, post): Observable<RecipeMenu> {
    return this.httpClient.put<RecipeMenu>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<RecipeMenu>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
