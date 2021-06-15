import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { User } from './model/User';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild(LoginComponent) login: LoginComponent;

  title = 'sweetsShop';
  user: User=new User();
  loggedIn: boolean=false;

  async ngOnInit() {
    this.login.user = this.user;
  }

  constructor(public router: Router) {}

  logOut() {
    this.user=new User();
    this.user.name="Guest";
    this.loggedIn=false;
    this.router.navigateByUrl("/");
  }

  userChangedHandler(user: User) {
    this.user=user;
    this.loggedIn=true;
    this.ngOnInit();
    console.log(user);
  }

}