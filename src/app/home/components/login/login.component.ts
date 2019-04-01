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
  invalidNum;
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
     console.log('valid num');
     
   }
  }
}
