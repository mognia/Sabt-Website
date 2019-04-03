import { Injectable  } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileInputService {
  hasFile = false;
  fileChange: Subject<any> = new Subject<any>();
  inptFile;
  constructor() { }

  validate(file){
    // here we can add our file validation
     let isValid = true;
    //get the file that user inputed
    this.inptFile = file;
    
    //if every thing is ok we say we have a file here 
    if (isValid) {
      this.hasFile = true;
      this.fileChange.next(this.hasFile)
    }
  }
  getOptionalInfo(userInfo){
    console.log(userInfo);
    
  }
}
