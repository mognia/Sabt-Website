import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileInputService {
  hasFile = false;
  fileChange: Subject<any> = new Subject<any>();
  inptFile;
  userInfo= {};
  userInfoChange = new EventEmitter<any>();
  openMailInputFromRecorder= new EventEmitter<any>();
  constructor() { }

  validate(file) {
    // here we can add our file validation
     const isValid = true;
    // get the file that user inputed
    this.inptFile = file;
    this.userInfo['fileName'] = this.inptFile.name;

    this.userInfoChange.emit(this.userInfo);
    // if every thing is ok we say we have a file here
    if (isValid) {
      this.hasFile = true;
      this.fileChange.next(this.hasFile);
    }
  }
  getOptionalInfo(userInfo) {
    this.userInfo = userInfo;
    this.userInfo['fileName'] = this.inptFile.name;
    this.userInfoChange.emit(this.userInfo);
  }

  getUserInfo() {
    return this.userInfo;
  }
}
