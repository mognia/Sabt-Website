import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'login-mailInput',
  templateUrl: './login-mailinput.component.html',
  styleUrls: ['./login-mailinput.component.scss']
})
export class LoginMailinputComponent implements OnInit {
  openFromRecorder = false;
  mailForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
   }

  ngOnInit() {
    this.mailForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
    if (!this.data.haveEmail) {
      this.openFromRecorder = true;
    }

  }
  submiteCode(){
    
  }

}
