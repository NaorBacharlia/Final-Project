import { Component, OnInit, ViewChild } from "@angular/core";
import { userInfo } from "../shared/models/user-info.model";
import { UserService } from "../shared/services/user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import CryptoJS from "crypto-js";
@Component({
  selector: "app-updatedetails",
  templateUrl: "./updatedetails.component.html",
  styleUrls: ["./updatedetails.component.css"]
})
export class UpdatedetailsComponent implements OnInit {
  @ViewChild("f") updateForm: NgForm;
  public userinfo: userInfo = new userInfo();

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.userService.getUserInfo().subscribe(
      res => {
        this.userinfo.Id = res.Id;
        this.userinfo.FirstName = res.FirstName;
        this.userinfo.LastName = res.LastName;
        this.userinfo.Email = res.Email;
        this.userinfo.Age = res.Age;
        this.userinfo.Country = res.Country;
        this.userinfo.UserImage = res.UserImage;
        console.log(res);
        console.log(this.userinfo);
      },
      err => {
        console.log(err);
      }
    );
  }

  sendDetails() {
    console.log(this.updateForm);
    this.userinfo.FirstName = this.updateForm.value.Firstname;
    this.userinfo.LastName = this.updateForm.value.Lastname;
    this.userinfo.Email = this.updateForm.value.Email;
    this.userinfo.Age = this.updateForm.value.Age;
    this.userinfo.Country = this.updateForm.value.Country;
    this.userinfo.UserImage = this.updateForm.value.UserImage;
    this.userinfo.Password = CryptoJS.SHA256(this.updateForm.value.Password).toString();
    console.log(this.userinfo);
    this.userService.editUser(this.userinfo).subscribe(
      res => {
        console.log(res);
        localStorage.clear();
        this.router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }
  deleteUser() {
    this.userService.deleteUser().subscribe(
      res => {
        console.log(res, "im from delete..");
        localStorage.clear();
        this.router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
