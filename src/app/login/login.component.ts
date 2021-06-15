import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() userChanged: EventEmitter<User> =   new EventEmitter();

  users: User[];
  user: User;

  constructor(public userService: UserServiceService, public formBuilder: FormBuilder, private router: Router) { }


  loginForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });



  login() {
    const user = this.loginForm.value;

    this.userService.getAllUsers().then(data => {
      this.users = data;

      this.users.forEach(u => {
        if (u.name == user.name && u.password == user.password) {
          console.log("match");
          this.user = u;
          this.userChanged.emit(this.user);
          alert("You have been logged in, " + this.user.name);
          this.router.navigateByUrl('/');
        }
        else console.log("no match")
      })
    })
  }
}
