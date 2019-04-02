import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "./../login/login.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialog(): void {

    this.dialog.open(LoginComponent,{disableClose: true , width:'40%' });

  }
}
