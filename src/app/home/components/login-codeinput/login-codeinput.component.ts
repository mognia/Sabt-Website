import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'login-codeinput',
  templateUrl: './login-codeinput.component.html',
  styleUrls: ['./login-codeinput.component.scss']
})
export class LoginCodeinputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginCodeinputComponent>) { }
  codeForm = new FormGroup({
    code: new FormControl(undefined, [Validators.required])
  });
  @Output() codeConfirmed = new EventEmitter<any>();
  ngOnInit() {
  }
  submiteCode() {
    if (this.codeForm.valid) {
      this.codeConfirmed.emit('codeConfirmed')
    }
    else {

    }
  }
}
