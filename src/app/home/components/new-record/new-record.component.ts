import { Component, OnInit, Input , EventEmitter } from '@angular/core';
import { FileInputService } from "../../../services/file-input.service";
import { UploaderComponent } from "./../uploader/uploader.component";
@Component({
  selector: 'new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent implements OnInit {
  hasFile = false;
  _subscription
  @Input() uploader : UploaderComponent;
  constructor(
   private fileInputService : FileInputService
  ) { 
    console.log(this.hasFile);
    this.hasFile = this.fileInputService.file;
    this._subscription = fileInputService.fileChange.subscribe((value) => { 
      this.hasFile = value; 
      console.log(this.hasFile);
      
    });
  }

  ngOnInit() {
  }


}
