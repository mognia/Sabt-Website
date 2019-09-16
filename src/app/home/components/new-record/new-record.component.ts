import { Component, OnInit, Input } from '@angular/core';
import { FileInputService } from '../../../services/file-input.service';
import { UploaderComponent } from './../uploader/uploader.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginMailinputComponent } from '../login-mailinput/login-mailinput.component';

@Component({
  selector: "new-record",
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {
  hasFile = false;
  isValid;
  _subscription;
  disableStepNavigation = true;
  fileInputForm: FormGroup;
  haveEmail;


  inputFile = { files: { length: 0 } };
  @Input() uploader: UploaderComponent;
  constructor(
    public dialog: MatDialog,
    private fileInputService: FileInputService,
    private fb: FormBuilder,
  ) {
    this.fileInputForm = this.fb.group({
      fileCtrl: ['', stepValidator], //
    });

     this.fileInputService.fileChange.subscribe(value => {  
      this.hasFile = value;
      this.isValid = value;
    });


  }
  ngOnInit() { }
  sendToValidation(e) {
    this.fileInputForm.controls['fileCtrl'].setValue(e.target.files.length);
    let file = null;
    file = e.target.files[0];

    this.fileInputService.validate(file);
  }
  mailStatus() {
    this.haveEmail = false;
  }
  submitRecord() {

    if (!this.haveEmail) {
      this.dialog.open(LoginMailinputComponent, {
         disableClose: true,
         width: '40%',
         data: {
          haveEmail: this.haveEmail,
        },
        });
    } else {
      // TODO: send data to service
    }
  }
}

export function stepValidator(control: FormControl) {
  if (control.value == 1) {

    return null;
  } else {
    return { fileNotFound: true };
  }
}
