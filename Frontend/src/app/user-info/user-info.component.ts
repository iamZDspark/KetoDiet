import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/model/IUserInfo';
import { UserInfoService } from 'src/services/user-info/user-info-service/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userinfo : IUserInfo[] = [];
  
  constructor(public userinfoService: UserInfoService) { }
  
  ngOnInit(): void {
    this.userinfoService.getAll().subscribe((data: IUserInfo[])=>{
      this.userinfo = data;
      console.log(this.userinfo);
    })  
  }
  
  deleterecipemenu(id){
    this.userinfoService.delete(id).subscribe(res => {
         this.userinfo = this.userinfo.filter(item => item.id !== id);
         console.log('recipemenu deleted successfully!');
    })


}
}
