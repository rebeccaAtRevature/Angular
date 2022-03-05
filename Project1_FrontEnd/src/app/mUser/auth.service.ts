import { Injectable } from '@angular/core';
import { MUser } from './m-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn: boolean = false;

  storeUser(user: MUser): void{
    sessionStorage.setItem("managerInfo", JSON.stringify(user));
  }

  retrieveUser(): MUser{
    let data: any = sessionStorage.getItem("managerInfo");
    return JSON.parse(data);
  }

  destroyUser(): void{
    sessionStorage.removeItem("managerInfo");
  }
}
