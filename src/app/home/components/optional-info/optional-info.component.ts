import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { FileInputService } from "../../../services/file-input.service";
@Component({
  selector: 'optional-info',
  templateUrl: './optional-info.component.html',
  styleUrls: ['./optional-info.component.scss']
})
export class OptionalInfoComponent implements OnInit {
  optionalInputForm: FormGroup;
  userInfo={};
  constructor(
    private fileInputService: FileInputService,
    private fb: FormBuilder
  ) { 
    this.optionalInputForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      comment: [""],
    });
  }

  ngOnInit() {
  }

  
  getFirstName(e){
    this.userInfo['firstName'] = e.target.value;
    this.fileInputService.getOptionalInfo(this.userInfo);
  }
  getLastName(e){
    this.userInfo['lastName'] = e.target.value;
    this.fileInputService.getOptionalInfo(this.userInfo);
  }
  getComment(e){
    this.userInfo['comment'] = e.target.value;
    this.fileInputService.getOptionalInfo(this.userInfo);
  }
}
