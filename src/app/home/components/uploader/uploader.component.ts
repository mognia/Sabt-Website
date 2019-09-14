import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FileInputService } from './../../../services/file-input.service';

@Component({
  selector: "file-uploader",
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  public uploaderForm: FormGroup;
  @Output() fileInputChange = new EventEmitter<any>();
  constructor(
    private fileInputService: FileInputService,

  ) {

  }

  ngOnInit() {}

  removeFile(){
    this.fileInputService.removeFile();
  }
}
