import { Component, OnInit } from '@angular/core';
import { FileInputService } from '../../../services/file-input.service';
import { SharedService } from "./../../../services/shared.service";
@Component({
  selector: 'new-claim',
  templateUrl: './new-claim.component.html',
  styleUrls: ['./new-claim.component.scss']
})
export class NewClaimComponent implements OnInit {
  hasFile = false;
  isValid;

  constructor(
    private fileInputService: FileInputService,
    private sharedService  : SharedService
  ) { }

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
