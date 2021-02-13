import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IIngredients } from '../../../model/IIngredients';
import { ErrorHandlerService } from 'src/services/shared/error-handler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsHttpService {

  private apiURL = "http://localhost:5009/api/Ingredients";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private errorHandlerService : ErrorHandlerService) { }
   
  getAll(): Observable<IIngredients[]> {
    return this.httpClient.get<IIngredients[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  create(post): Observable<IIngredients> {
    return this.httpClient.post<IIngredients>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }  
   
  find(id): Observable<IIngredients> {
    return this.httpClient.get<IIngredients>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  update(id, post): Observable<IIngredients> {
    return this.httpClient.put<IIngredients>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<IIngredients>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
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
