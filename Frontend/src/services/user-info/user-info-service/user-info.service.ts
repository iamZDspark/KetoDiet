import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserInfo } from 'src/model/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private apiURL = "https://jsonplaceholder.typicode.com";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>(this.apiURL + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(post): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, post): Observable<UserInfo> {
    return this.httpClient.put<UserInfo>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<UserInfo>(this.apiURL + '/posts/' + id, this.httpOptions)
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
