import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserServiceService, public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  registerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  async register() {
    const user = this.registerForm.value;

    var exists:boolean;
    exists=false;
    const users = await this.userService.getAllUsers();

    users.forEach(u => {
      if(u.name===user.name) {
      exists=true;      
      }
    })
    
    
    if (!exists){
    this.userService.register(user);
    alert("Registered user " + user.name);
    this.router.navigateByUrl('/');
    }
    else {alert("User already exists");}
  }


}
