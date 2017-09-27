import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string){
    this.name = name;
    this.email = email;

  }

}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  public login(credentials){
    if( credentials.email === null || credentials.password === null ){
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer =>{
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon','sinei@iftm.edu.br');
        observer.next(access);
        observer.complete();

      });
    }

  }

  public register(credentials){
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }

  }

  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
  
}
