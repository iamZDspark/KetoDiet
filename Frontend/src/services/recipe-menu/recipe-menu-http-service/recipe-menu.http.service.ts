import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IRecipeMenu } from 'src/model/IRecipeMenu';
import { ErrorHandlerService } from 'src/services/shared/error-handler/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeMenuHttpService {

  private apiURL = "http://localhost:5009/api/RecipeMenu";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private errorHandlerService : ErrorHandlerService) { }
   
  getAll(): Observable<IRecipeMenu[]> {
    return this.httpClient.get<IRecipeMenu[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  create(post): Observable<IRecipeMenu> {
    return this.httpClient.post<IRecipeMenu>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }  
   
  find(id): Observable<IRecipeMenu> {
    return this.httpClient.get<IRecipeMenu>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  update(id, post): Observable<IRecipeMenu> {
    return this.httpClient.put<IRecipeMenu>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<IRecipeMenu>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
}
