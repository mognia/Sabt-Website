import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'login-phoneinput',
  templateUrl: './login-phoneinput.component.html',
  styleUrls: ['./login-phoneinput.component.scss']
})
export class LoginPhoneinputComponent implements OnInit {
  phoneForm = new FormGroup({
    phone: new FormControl('', Validators.required)
  });
  invalidNum;
  @Output() codeSent = new EventEmitter<any>();
  constructor(
    public dialogRef: MatDialogRef<LoginPhoneinputComponent>,
    public authService: AuthService,
  ) { }

  ngOnInit() {
  }
  validateNum(num) {
    const userPhone = num.phone.number;
    if (this.phoneForm.invalid) {
      this.invalidNum = true;

    } else {
      this.invalidNum = false;
      this.codeSent.emit('codeSent');
      this.authService.loginUser({phone: userPhone}).subscribe(res=>{
        console.log(res);
      });
    }
  }
}
