import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userInfo } from '../models/user-info.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public myUserInfo:userInfo;
  
  // DI 
  constructor(private myHttpClient:HttpClient) { }

  public myUserAuth=localStorage.getItem('authUser');
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic '+ this.myUserAuth
    })
  };

  public loginUser(){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '+ this.myUserAuth
      })
    };
    return this.myHttpClient.get<userInfo>("http://localhost:55727/api/login",this.httpOptions);
  }

  public getUserInfo(){
    return this.myHttpClient.get<userInfo>("http://localhost:55727/api/GetUserInfo",this.httpOptions);
  }
  
  public createUser(newUser:userInfo){
    return this.myHttpClient.post<userInfo>("http://localhost:55727/api/register",newUser);  
  }
  
  public editUser(userDetails:userInfo){
    return this.myHttpClient.put<userInfo>("http://localhost:55727/api/updateuser",userDetails,this.httpOptions);
  }

  public deleteUser(){
    return this.myHttpClient.delete<userInfo>("http://localhost:55727/api/deleteuser",this.httpOptions);
  }
}
