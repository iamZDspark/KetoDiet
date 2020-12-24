import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginInfo } from '../../model/logininfo';

@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {

  private apiURL = "http://localhost:5009/api/LoginInfo";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<LoginInfo[]> {
    return this.httpClient.get<LoginInfo[]>(this.apiURL + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(post): Observable<LoginInfo> {
    return this.httpClient.post<LoginInfo>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<LoginInfo> {
    return this.httpClient.get<LoginInfo>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, post): Observable<LoginInfo> {
    return this.httpClient.put<LoginInfo>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<LoginInfo>(this.apiURL + '/posts/' + id, this.httpOptions)
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
