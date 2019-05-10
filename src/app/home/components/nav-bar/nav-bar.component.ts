import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from './../login/login.component';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public authService: AuthService) { }

  ngOnInit() {
    this.authService.closeDialog.subscribe(val =>{
      this.dialog.closeAll();
    })
  }
  openLoginDialog(): void {

    this.dialog.open(LoginComponent, {disableClose: true , width: '40%' });

  }
}
