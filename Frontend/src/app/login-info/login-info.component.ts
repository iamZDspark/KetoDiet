import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService } from '../../services/auth/auth-http-service/auth.htttp.service';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';
import { AppModule } from '../app.module';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {
  username: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit() {

  }
  onLoginButtonClick(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['./home']);
    } 
    else {
      alert("Invalid Crediantials");
    }

  }

}
