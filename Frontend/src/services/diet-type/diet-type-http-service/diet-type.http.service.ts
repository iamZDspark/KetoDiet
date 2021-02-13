import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDietType } from 'src/model/IDietType';
import { ErrorHandlerService } from 'src/services/shared/error-handler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DietTypeHttpService {
  private apiURL = "http://localhost:5009/api/DietType";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private errorHandlerService : ErrorHandlerService) { }
   
  getAll(): Observable<IDietType[]> {
    return this.httpClient.get<IDietType[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  create(post): Observable<IDietType> {
    return this.httpClient.post<IDietType>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }  
   
  find(id): Observable<IDietType> {
    return this.httpClient.get<IDietType>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  update(id, post): Observable<IDietType> {
    return this.httpClient.put<IDietType>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<IDietType>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
}
