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
    this.hasFile = false;
    this.fileInputService.fileChange.subscribe(value => {
      this.hasFile = value;
      this.isValid = value;
    });
  }
  
  onfileChange(e){
    
    this.sharedService.sendFileData(e)
    
  }

}
export function stepValidator(control: FormControl) {
  if (control.value == 1) {

    return null;
  } else {
    return { fileNotFound: true };
  }
}