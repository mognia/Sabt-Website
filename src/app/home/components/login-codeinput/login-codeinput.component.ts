import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'login-codeinput',
  templateUrl: './login-codeinput.component.html',
  styleUrls: ['./login-codeinput.component.scss'],
})
export class LoginCodeinputComponent implements OnInit {
  wrongCode = false;
  msg;
  constructor(
    public dialogRef: MatDialogRef<LoginCodeinputComponent>,
    public authService: AuthService) { }
  codeForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });
  @Output() codeConfirmed = new EventEmitter<any>();
  ngOnInit() {
  }
  submiteCode(value) {
    this.authService.sendCode({code: value}).subscribe(res => {
      const success = res['success'];
      if (success) {
        this.codeConfirmed.emit('codeConfirmed');
      } else {
        this.wrongCode = true;
        this.msg = res['msg'];
      }
    });
  }
}
