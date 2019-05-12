import { Component, OnInit } from '@angular/core';
import { FileInputService } from '../../../services/file-input.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'login-mailInput',
  templateUrl: './login-mailinput.component.html',
  styleUrls: ['./login-mailinput.component.scss']
})
export class LoginMailinputComponent implements OnInit {
  openFromRecorder = false;
  constructor(
    private fileInputService: FileInputService,
  ) { }

  ngOnInit() {
    this.fileInputService.openMailInputFromRecorder.subscribe(val =>{
      this.openFromRecorder = true;
    });
  }

}
