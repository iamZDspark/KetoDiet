import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUserInfo } from '../../../model/IUserInfo';
import { ErrorHandlerService } from '../../../services/shared/error-handler/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoHttpService {

  private apiURL = "http://localhost:5009/api/userinfo";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private errorHandlerService: ErrorHandlerService) { }
   
  getAll(): Observable<IUserInfo[]> {
    return this.httpClient.get<IUserInfo[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  create(post): Observable<IUserInfo> {
    return this.httpClient.post<IUserInfo>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }  
   
  find(id): Observable<IUserInfo> {
    return this.httpClient.get<IUserInfo>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  update(id, post): Observable<IUserInfo> {
    return this.httpClient.put<IUserInfo>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<IUserInfo>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.errorHandler)
    )
  }
}
