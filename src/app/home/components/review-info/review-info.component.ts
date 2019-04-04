import { Component, OnInit } from '@angular/core';
import { FileInputService } from "./../../../services/file-input.service";
@Component({
  selector: 'review-info',
  templateUrl: './review-info.component.html',
  styleUrls: ['./review-info.component.scss']
})
export class ReviewInfoComponent implements OnInit {
  firstName = 'ثبت نشده است';
  lastName = 'ثبت نشده است';
  comment = 'ثبت نشده است';
  fileName = 'ثبت نشده است';
  constructor(
    public fileInputService : FileInputService
  ) {
    this.fileInputService.userInfoChange.subscribe(
      (data: any) => {
        console.log(data);
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.comment = data.comment;
        this.fileName = data.fileName;
      });
   }

  ngOnInit() {
  }

}
