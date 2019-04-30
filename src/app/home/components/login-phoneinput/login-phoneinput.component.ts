import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'login-phoneinput',
  templateUrl: './login-phoneinput.component.html',
  styleUrls: ['./login-phoneinput.component.scss']
})
export class LoginPhoneinputComponent implements OnInit {
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });
  invalidNum;
  @Output() codeSent = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<LoginPhoneinputComponent>,
  ) { }

  ngOnInit() {
  }
  validateNum() {
    let userPhone = this.phoneForm.controls['phone'];
    if (userPhone.errors != null) {
      this.invalidNum = true;
      console.log('invalid num');

    } else {
      this.invalidNum = false;
      this.codeSent.emit('codeSent');
      console.log('valid num');

    }
  }
}
