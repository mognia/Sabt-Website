import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { FileInputService } from "./../../../services/file-input.service";

@Component({
  selector: "file-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"]
})
export class UploaderComponent implements OnInit {
  public uploaderForm: FormGroup;
  constructor(
    private fileInputService: FileInputService,
    public fb: FormBuilder
  ) {
    this.uploaderForm = fb.group({
      file: [""]
    });
  }

  ngOnInit() {}
  @Output() fileInputChange = new EventEmitter<any>();
  sendToValidation(e){
    let file = e.target.files[0];

    this.fileInputService.validate(file);
  }
}
