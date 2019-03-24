import { Injectable  } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileInputService {
  file = false;
  fileChange: Subject<any> = new Subject<any>();
  constructor() { }

   isValid = true;
  validate(file){
    // console.log(file);
    if (this.isValid) {
      this.file = true;
      this.fileChange.next(this.file)
    }
  }
  hasFile(){
    return this.file;
  }
}
