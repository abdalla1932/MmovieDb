import { Component} from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  isLoggedIn:boolean= false;
  userName:any=[]
  constructor(private _AuthService:AuthService)
   { 
     this._AuthService.currentUserData.subscribe((res:any)=>{
       this.userName = res
     })


     this._AuthService.currentUserData.subscribe(()=>{

       if (this._AuthService.currentUserData.getValue()== null) {
         this.isLoggedIn = false;
       }
       else{
         this.isLoggedIn = true;
       }
     })
   }

  logout()
  {
    this._AuthService.logout()
  }

}
