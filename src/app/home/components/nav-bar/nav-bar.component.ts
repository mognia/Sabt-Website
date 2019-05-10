import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './../login/login.component';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  userLogedin = false;
  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
   const loginUser = this.authService.userLoginStatus();
    if (loginUser) {
      this.userLogedin = true;
    }

    this.authService.closeDialog.subscribe(val => {
      this.dialog.closeAll();
      this.userLogedin = true;
    });
  }
  openLoginDialog(): void {

    this.dialog.open(LoginComponent, {disableClose: true , width: '40%' });

  }
  gotoPanel(){
    this.router.navigate(['/panel']);
  }
}
