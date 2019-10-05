import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { userLoginInfo } from '../shared/models/user-login-info.model';
import { Router } from '@angular/router';


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
    console.log(this.loginForm);
    this.userLogin.Email=this.loginForm.value.userName;
    this.userLogin.Password=this.loginForm.value.Password;
    localStorage.setItem('userName',this.userLogin.Email);
    this.userService.loginUser(this.userLogin).subscribe(
      (res)=>{
        console.log(res.token);
        localStorage.setItem('token',res.token);
        this.userService.getUserInfo().subscribe(
          (res)=>{
            
            console.log(res);
            console.log(res.Id);
            
          },
          (err)=>{ console.log(err)});
          
        this.router.navigate(['/mainpage']);
      },
      (err)=>{ console.log(err)}
    );
    
  }

}
