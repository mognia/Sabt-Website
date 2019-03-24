import { Component, OnInit, Input } from '@angular/core';
import { FileInputService } from "../../../services/file-input.service";
import { UploaderComponent } from "./../uploader/uploader.component";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent implements OnInit {
  hasFile = false;
  isValid;
  _subscription;
  linearMode = true;
  firstForm: FormGroup;

  @Input() uploader: UploaderComponent;
  constructor(
    private fileInputService: FileInputService,
    private fb: FormBuilder
  ) {
    this.firstForm = this.fb.group({
      firstCtrl: ['', this.stepValidator],
    });


    this._subscription = fileInputService.fileChange.subscribe((value) => {
      this.hasFile = value;
      this.isValid = value;
    });
  }

  ngOnInit() {
  }


  stepValidator() {


  //  if (!this.isValid) {
  //    return { fileNotFound: true };
  //  }
  //  else{
  //    return null
  //  }
  }
}
