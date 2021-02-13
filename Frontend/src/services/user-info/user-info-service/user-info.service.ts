import { Injectable } from '@angular/core'; 
import {  Observable, throwError } from 'rxjs';
import { IUserInfo } from 'src/model/IUserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private userInfo: UserInfoService) { }
   
  getAll(): Observable<IUserInfo[]> {
    return this.userInfo.getAll();
  }
   
  create(post): Observable<IUserInfo> {
    return this.create(post);
  }  
   
  find(id): Observable<IUserInfo> {
    return this.find(id);
  }
   
  update(id, post): Observable<IUserInfo> {
    return this.update(id, post);
  }
   
  delete(id){
    return this.delete(id);
  }
}
