import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NutrientsType } from 'src/model/nutrientstype';

@Injectable({
  providedIn: 'root'
})
export class NutrientsTypeService {

  private apiURL = "http://localhost:5009/api/NutrientsType";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<NutrientsType[]> {
    return this.httpClient.get<NutrientsType[]>(this.apiURL + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(post): Observable<NutrientsType> {
    return this.httpClient.post<NutrientsType>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<NutrientsType> {
    return this.httpClient.get<NutrientsType>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, post): Observable<NutrientsType> {
    return this.httpClient.put<NutrientsType>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<NutrientsType>(this.apiURL + '/posts/' + id, this.httpOptions)
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
