import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { INutrientsType } from '../../../model/INutrientsType';
import { ErrorHandlerService } from 'src/services/shared/error-handler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class NutrientsTypeHttpService {

  private apiURL = "http://localhost:5009/api/NutrientsType";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private errorHandlerService: ErrorHandlerService) { }
   
  getAll(): Observable<INutrientsType[]> {
    return this.httpClient.get<INutrientsType[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  create(post): Observable<INutrientsType> {
    return this.httpClient.post<INutrientsType>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }  
   
  find(id): Observable<INutrientsType> {
    return this.httpClient.get<INutrientsType>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  update(id, post): Observable<INutrientsType> {
    return this.httpClient.put<INutrientsType>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<INutrientsType>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
}
