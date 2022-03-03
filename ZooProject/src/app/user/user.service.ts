import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  
  validateUser(newUser: User): User{
    if(newUser.role=="admin" && newUser.username=="admin" && newUser.password=="admin"){
      // user has successfully logged in as an admin
      // Store the user information in the browser storage
      this.authService.storeUser(newUser);
      // mark that we have logged in
      this.authService.loggedIn=true;
    } else if (newUser.role=="customer" && newUser.username=="customer" && newUser.password=="customer"){
      // Store the user information in the browser storage
      this.authService.storeUser(newUser);
      // mark that we have logged in
      this.authService.loggedIn=true;
    } else{
      newUser = {
        username: "",
        password: "",
        role: ""
      }
    }
    return newUser;
  }
}
