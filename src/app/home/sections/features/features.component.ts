import { Component, OnInit } from '@angular/core';
import { NbGetters, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';


@Component({
  selector: 'home-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  customColumn = 'نام فایل';
  defaultColumns = [ 'آی دی تراکنش', 'نوع فایل', 'زمان ثبت' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  source: NbTreeGridDataSource<any>;
  constructor() { }

  ngOnInit() {
  }

}
