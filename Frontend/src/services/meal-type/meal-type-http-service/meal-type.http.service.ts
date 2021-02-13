import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMealType } from 'src/model/IMealType';
import { ErrorHandlerService } from 'src/services/shared/error-handler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MealTypeHttpService {

  private apiURL = "http://localhost:5009/api/MealType";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private errorHandlerService : ErrorHandlerService) { }
   
  getAll(): Observable<IMealType[]> {
    return this.httpClient.get<IMealType[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  create(post): Observable<IMealType> {
    return this.httpClient.post<IMealType>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }  
   
  find(id): Observable<IMealType> {
    return this.httpClient.get<IMealType>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  update(id, post): Observable<IMealType> {
    return this.httpClient.put<IMealType>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<IMealType>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
}
