import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 fileData :Subject<any> = new Subject<any>();
  constructor() { }
  sendFileData(data: any) {
    this.fileData.next(data);
  }
  // getFileData(): Observable<any> {
  //   return this.fileData.asObservable();
  // }
}
