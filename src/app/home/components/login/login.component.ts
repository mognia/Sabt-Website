import { Component, OnInit, Input } from '@angular/core';
import { LoginPhoneinputComponent } from '../login-phoneinput/login-phoneinput.component';
import { LoginCodeinputComponent } from '../login-codeinput/login-codeinput.component';
import { LoginMailinputComponent } from '../login-mailinput/login-mailinput.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'dialog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  mailForm = new FormGroup({
    email: new FormControl(),
  });

  codeSent = false;
  codeSubmited = false;
  hasEmail = true;

  @Input() PhoneInput: LoginPhoneinputComponent;
  @Input() CodeInput: LoginCodeinputComponent;
  @Input() MAilInput: LoginMailinputComponent;
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
  }

  sendCode() {
    this.codeSent = true;

  }
  submitCode(){
    this.codeSubmited = true;
   let logedUser = localStorage.getItem('user');
   //logedUser = JSON.parse(logedUser);
    if (JSON.parse(logedUser).email == null) {
      this.hasEmail = false;
      
    } else {
      
    }
  }

}
