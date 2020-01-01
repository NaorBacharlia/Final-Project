import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { userLoginInfo } from '../shared/models/user-login-info.model';
import { Router } from '@angular/router';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  @ViewChild('f') loginForm: NgForm;
  
  public userLogin:userLoginInfo=new userLoginInfo();

  // DI
  constructor(private userService: UserService,private router: Router ) { }

  OnSubmit(){
    this.userLogin.Email=this.loginForm.value.userName;
    this.userLogin.Password=CryptoJS.SHA256(this.loginForm.value.Password).toString();
    localStorage.setItem('authUser',this.userLogin.Password+this.userLogin.Email);
    this.userService.loginUser().subscribe(
      (res)=>{
        this.router.navigate(['/mainpage']);},
      (err)=>{ console.log(err)});
  }
}
