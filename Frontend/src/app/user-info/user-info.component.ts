import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/model/userinfo';
import { UserInfoService } from '../../services/user-info/user-info-service/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userinfo: UserInfo[] = [];
  
  constructor(public userinfoService: UserInfoService) { }
  
  ngOnInit(): void {
    this.userinfoService.getAll().subscribe((data: UserInfo[])=>{
      this.userinfo = data;
      console.log(this.userinfo);
    })  
  }
  
  deleteuserinfo(id){
    this.userinfoService.delete(id).subscribe(res => {
         this.userinfo = this.userinfo.filter(item => item.id !== id);
         console.log('userinfo deleted successfully!');
    })

}

}
