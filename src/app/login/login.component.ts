import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {JsonPipe} from "@angular/common";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatCardActions,
    MatButton,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public loginFormGroup !: FormGroup;

  constructor(private fb : FormBuilder,
              private authService:AuthenticationService,
              private router:Router){

  }
  ngOnInit(): void {
    this.loginFormGroup=this.fb.group({
      username:this.fb.control(''),
      password:this.fb.control('')
    })
  }

  login() {
    let username =this.loginFormGroup.value.username;
    let password=this.loginFormGroup.value.password;
    let boolean:boolean=this.authService.login(username,password);
    if(boolean){
      this.router.navigateByUrl('/admin');
    }
  }
}
