import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { userInfo } from "../shared/models/user-info.model";
import { UserService } from "../shared/services/user.service";
import { Router } from "@angular/router";
import CryptoJS from "crypto-js";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  @ViewChild("f") signupForm: NgForm;

  public newUser: userInfo = new userInfo();

  public req=new XMLHttpRequest();

  

  constructor(private userService: UserService, private router: Router) {}
  getAllCountries(){
    this.req.open("GET", "https://restcountries.eu/rest/v2/all?fields=name;flag");
    this.req.onreadystatechange = () => {
      if(this.req.readyState==4){
        console.log(this.req.status,this.req.response);
        let x=JSON.parse(this.req.response);
        
      }

    }
  }
  OnSubmit() {
    
    console.log(this.signupForm);
    this.signupForm.value.Password = CryptoJS.SHA256(
      this.signupForm.value.Password
    ).toString();
    this.newUser.FirstName = this.signupForm.value.Firstname;
    this.newUser.LastName = this.signupForm.value.Lastname;
    this.newUser.Email = this.signupForm.value.Email;
    this.newUser.Age = this.signupForm.value.Age;
    this.newUser.Country = this.signupForm.value.Country;
    this.newUser.UserImage = this.signupForm.value.UserImage;
    this.newUser.Password = this.signupForm.value.Password;
    if (
      !this.newUser.Password.localeCompare(
        this.signupForm.value.ConfirmPassword
      )
    ) {
      var index = this.newUser.Password.localeCompare(
        this.signupForm.value.ConfirmPassword
      );
      console.log("the password are equals.." + index);
      this.newUser.Password = this.signupForm.value.Password;
    } else {
      console.log("the password are not equal.");
    }
    this.userService.createUser(this.newUser).subscribe(
      res => {
        this.router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
