import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileInputService } from './../../../services/file-input.service';
@Component({
  selector: 'review-info',
  templateUrl: './review-info.component.html',
  styleUrls: ['./review-info.component.scss'],
})

export class ReviewInfoComponent implements OnInit {
  user;
  firstName = 'ثبت نشده است';
  lastName = 'ثبت نشده است';
  comment = 'ثبت نشده است';
  fileName = 'ثبت نشده است';
  email;
  @Output() haveEmail = new EventEmitter<any>();
  constructor(
    public fileInputService: FileInputService,
  ) {
    this.fileInputService.userInfoChange.subscribe(
      (data: any) => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.comment = data.comment;
        this.fileName = data.fileName;
      });
   }

  ngOnInit() {
   this.user = localStorage.getItem('user');
   this.user = JSON.parse(this.user);
   if (this.user != null) {
     this.email = this.user.email;
   }else {
     this.email = 'ثبت نشده است';
    this.haveEmail.emit('no email');
   }
  }

}
