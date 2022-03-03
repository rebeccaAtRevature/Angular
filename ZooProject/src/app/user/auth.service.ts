import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // purpose of this service is to store and retrieve user info from browser storage
  // and mark if a person has logged in or logged out
  constructor() { }

  loggedIn:boolean = false;

  storeUser(user: User): void{
    // once you close the browser, you will lose this information
    // Session storage may be accessed from any component in the project
    sessionStorage.setItem("userInfo", JSON.stringify(user));
  }

  retrieveUser(): User{
    let data: any = sessionStorage.getItem("userInfo");
    return JSON.parse(data)
  }

  destroyUser(): void{
    sessionStorage.removeItem("userInfo");
  }
}
