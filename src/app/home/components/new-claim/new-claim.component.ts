import { Component, OnInit } from '@angular/core';
import { FileInputService } from '../../../services/file-input.service';
import { SharedService } from "./../../../services/shared.service";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'new-claim',
  templateUrl: './new-claim.component.html',
  styleUrls: ['./new-claim.component.scss']
})
export class NewClaimComponent implements OnInit {
  hasFile = false;
  isValid;
  fileInputForm: FormGroup;
  constructor(
    private fileInputService: FileInputService,
    private sharedService  : SharedService,
    private fb: FormBuilder
  ) {
    this.fileInputForm = this.fb.group({
      fileCtrl: ['', stepValidator], //
    });
   }

  ngOnInit() {
    this.fileInputService.fileChange.subscribe(value => {
      this.hasFile = value;
      this.isValid = value;
    });
    
  }
  
  onfileChange(e){
    this.fileInputForm.controls['fileCtrl'].setValue(e.target.files.length);
    this.sharedService.sendFileData(e)
    this.hasFile = true;
  }

}
export function stepValidator(control: FormControl) {
  if (control.value == 1) {

    return null;
  } else {
    return { fileNotFound: true };
  }
}