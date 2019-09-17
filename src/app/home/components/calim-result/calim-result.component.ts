import { Component, OnInit } from '@angular/core';
import { FileInputService } from '../../../services/file-input.service';
import { SharedService } from "../../../services/shared.service";
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
@Component({
  selector: 'calim-result',
  templateUrl: './calim-result.component.html',
  styleUrls: ['./calim-result.component.scss']
})
export class CalimResultComponent implements OnInit {
  fileName: string = null;
  fileFormat: string = null;
  fileSize:number = null;
  lastModify:any = null;
  constructor(
    private fileInputService: FileInputService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.fileData.subscribe(data => {

      let inputFile = data.target.files[0];
      this.fileName = inputFile.name;
      this.fileFormat = inputFile.type;
      this.fileSize = inputFile.size  / 1024;
      this.lastModify = new Date(inputFile.lastModified).toISOString(); 
    })

  }

}
