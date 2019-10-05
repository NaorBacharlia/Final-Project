import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { userInfo } from '../models/user-info.model';
import { userLoginInfo } from '../models/user-login-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public myUserInfo:userInfo;
  
  
  // DI 
  constructor(private myHttpClient:HttpClient) { }


  public getUserInfo(){

    let myToken=localStorage.getItem('token');
 
    let myUserName=localStorage.getItem('userName');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '+ myUserName
      })
    };
    return this.myHttpClient.get<userInfo>("http://localhost:55727/api/GetUserInfo",httpOptions);
  }


  public loginUser(newUserLogin:userLoginInfo){

    return this.myHttpClient.post<userLoginInfo>("http://localhost:55727/api/login",newUserLogin);
  }

  public createUser(newUser:userInfo){

    return this.myHttpClient.post<userInfo>("http://localhost:55727/api/register",newUser);  
  }
  
  public editUser(userDetails:userInfo){
    console.log(userDetails,"from service");
    return this.myHttpClient.put<userInfo>("http://localhost:55727/api/updateuser",userDetails);
  }

  public deleteUser(){
    let myUserName=localStorage.getItem('userName');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '+ myUserName
      })
    };
    return this.myHttpClient.delete<userInfo>("http://localhost:55727/api/deleteuser",httpOptions);
  }
}
