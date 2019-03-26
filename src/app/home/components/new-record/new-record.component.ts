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
  firstForm: FormGroup;

  inputFile = { files: { length: 0 } };
  @Input() uploader: UploaderComponent;
  constructor(
    private fileInputService: FileInputService,
    private fb: FormBuilder
  ) {
    this.firstForm = this.fb.group({
      firstCtrl: ["",] // stepValidator
    });

    this._subscription = fileInputService.fileChange.subscribe(value => {
      console.log(value);
      
      this.hasFile = value;
      this.isValid = value;
    });

    
  }

  stepCtrlBtn(e){
   
   
  }
  ngOnInit() {}
}

export function stepValidator(control: FormControl) {
  if (control.value == 1) {

    return null;
  } else {
    return { fileNotFound: true };
  }
}
function stepCtrlBtn() {
  
}