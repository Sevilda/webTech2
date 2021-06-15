import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {User} from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'http://localhost:8080/'
  user:User;

  constructor(private http: HttpClient) { }

  //new user
  login (user) {
    this.user = user;
  }

  //new user
  async register (user: User) {
    return this.http.post<User>(this.url+ 'api/new_user', user).toPromise();
  }

  //get all users
  async getAllUsers() {
  return await this.http.get<User[]>(this.url + 'api/users').toPromise();
  }

  

}
