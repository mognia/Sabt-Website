import { Component, OnInit, Input } from '@angular/core';
import { LoginPhoneinputComponent } from "../login-phoneinput/login-phoneinput.component";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dialog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  codeForm = new FormGroup({
    code: new FormControl(undefined, [Validators.required])
  });
  mailForm = new FormGroup({
    email: new FormControl()
  });

  codeSent = false;
  codeSubmited = false;
  @Input() PhoneInput:LoginPhoneinputComponent;
  constructor() { }

  ngOnInit() {
  }

  sendCode() {
    this.codeSent = true;

  }

  submiteCode() {
    if (this.codeForm.valid) {
      this.codeSubmited = true;
    }
    else {

    }
  }
}
