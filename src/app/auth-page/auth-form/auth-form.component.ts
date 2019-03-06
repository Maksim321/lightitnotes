import { Component, OnInit } from '@angular/core';
import { AuthService, MessageService} from "../../core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  hidePass:boolean = true;
  constructor(private authService: AuthService,
              private message:MessageService,
              private router: Router) { }

  authForm = new FormGroup({
  	email: new FormControl('', [Validators.required, Validators.email]),
  	password: new FormControl('', [Validators.required])
  });
  showSpinner:boolean = false;

  ngOnInit() {
  }

  tryLogin(){
    this.showSpinner = true;
    this.authService.signIn(this.authForm.value).then(()=> {
      this.message.messageSuccess("Авторизовались!");
      this.router.navigate(["notes"]);
    }).catch((err)=>{
      this.showSpinner = false;
      this.message.messageError(err);
    });
  }

  tryGoogleLogin(){
    this.showSpinner = true;
  	this.authService.googleLogin().then(()=>{
      this.message.messageSuccess("Авторизовались!");
      this.router.navigate(["notes"]);
    }).catch((err)=>{
      this.showSpinner = false;
      this.message.messageError(err);
    });
  }

  tryRegister(){
    this.showSpinner = true;
    this.authService.register(this.authForm.value).then((user)=>{
      this.message.messageSuccess("Зарегистрировались!");
      this.router.navigate(["notes"]);
    }).catch((err)=>{
      this.showSpinner = false;
      this.message.messageError(err);
    });
  }
}
