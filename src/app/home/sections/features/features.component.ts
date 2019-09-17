import { Component, OnInit } from '@angular/core';
import { NbGetters, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface FSEntry {
  fileName: string;
  transactionId: string;
  fileType: string;
  date?: string;
}

@Component({
  selector: 'home-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  defaultColumns = ['نام فایل','آی دی تراکنش', 'نوع فایل', 'زمان ثبت' ];

  dataSource: NbTreeGridDataSource<FSEntry>;



  constructor() {     
  }
  data = [
     { fileName: "file number One", transactionId: '21312eewxaxwxc', fileType: 'image/jpg', date: "22:12" },
     { fileName: "file number Two", transactionId: '7878712eevfvaxwxc', fileType: 'image/jpg', date: "21:12" },
     { fileName: "file number Three", transactionId: '2131esdvfxaxwxc', fileType: 'image/png', date: "12:18" },
     { fileName: "file number four", transactionId: '21312eewxaxwxc', fileType: 'image/svg', date: "01:29" },
     { fileName: "file number 5", transactionId: '212ee123wxaxwxc', fileType: 'image/gif', date: "14:14" },
     { fileName: "file number 6", transactionId: '21312eewxaxwxc', fileType: 'image/jpg', date: "20:02" },
     { fileName: "file number 7", transactionId: '212eew123xaxwxc', fileType: 'image/gif', date: "12:12" },
     { fileName: "file number 8", transactionId: '21312eewxaxwxc', fileType: 'image/jpeg', date: "17:25" },
     { fileName: "file number 9", transactionId: '21312e12ewxwxc', fileType: 'image/png', date: "04:12" }

  ]
  ngOnInit() {
  }

}
