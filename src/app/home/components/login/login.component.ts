import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dialog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
  });
  codeForm = new FormGroup({
		code: new FormControl(undefined, [Validators.required])
  });
  mailForm = new FormGroup({
		email: new FormControl()
  });
  invalidNum;
  codeSent=false;
  codeSubmited=false;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
  ) { }

  ngOnInit() {
  }
  validateNum(){
   let userPhone = this.phoneForm.controls['phone'];
   if (userPhone.errors !=null) { 
     this.invalidNum=true;
     console.log('invalid num');
     
   }else{
    this.invalidNum=false;
    this.codeSent= true;
     console.log('valid num');
     
   }
  }
  submiteCode(){
    if (this.codeForm.valid) {
      this.codeSubmited = true;
    }
    else{

    }
  }
}
