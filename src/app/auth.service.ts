import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserData:any= new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if (localStorage.getItem("userToken")) {
      this.saveCurrentUser();
    }
   }

  register(formData:object):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`,formData)
  }

  login(formData:object):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`,formData)
  }

  saveCurrentUser()
  {
    let  encodedToken:any = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken)
    console.log(decodedToken);
    this.currentUserData.next(decodedToken);
    
  }

  logout()
  {
    this.currentUserData.next(null);
    localStorage.removeItem("userToken");
    this._Router.navigate(["/login"])

  }

}
