import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FileInputService } from "./../../../services/file-input.service";

@Component({
  selector: 'file-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  public uploaderForm: FormGroup;
  constructor(
    private fileInputService: FileInputService,
    public fb: FormBuilder
  ) {


    this.uploaderForm = fb.group({
      file: [''],
    });
  }

  ngOnInit() {
  }
  @Input() validationChange = new EventEmitter<any>();

  validate(e) {

    this.fileInputService.validate(e.target.files[0]);
  }
}
