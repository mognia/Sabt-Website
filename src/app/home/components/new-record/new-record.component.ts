import { Component, OnInit, Input } from "@angular/core";
import { FileInputService } from "../../../services/file-input.service";
import { UploaderComponent } from "./../uploader/uploader.component";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "new-record",
  templateUrl: "./new-record.component.html",
  styleUrls: ["./new-record.component.scss"]
})
export class NewRecordComponent implements OnInit {
  hasFile = false;
  isValid;
  _subscription;
  linearMode = true;
  fileInputForm: FormGroup;

  inputFile = { files: { length: 0 } };
  @Input() uploader: UploaderComponent;
  constructor(
    private fileInputService: FileInputService,
    private fb: FormBuilder
  ) {
    this.fileInputForm = this.fb.group({
      fileCtrl: ["", stepValidator] // stepValidator
    });

    this._subscription = fileInputService.fileChange.subscribe(value => {      
      this.hasFile = value;
      this.isValid = value;
    });


  }

  getOptionalValue(e) {
    console.log(e);
    

  }
  ngOnInit() { }

  getInputFile() {
   let inputedFile = this.fileInputForm.controls['fileCtrl'] ;
   console.log(this.hasFile);
   
  }
}

export function stepValidator(control: FormControl) {
  if (control.value == 1) {

    return null;
  } else {
    return { fileNotFound: true };
  }
}