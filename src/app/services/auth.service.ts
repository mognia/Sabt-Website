import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  closeDialog= new EventEmitter<any>();
  constructor(private http: HttpClient) { }
  authToken;
  logedUser;

  loginUser(userPhone) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/getUserPhone', userPhone, { headers: headers });
  }
  sendCode(code) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/getCode', code, { headers: headers });
  }
  saveUserData(user, token) {

    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.logedUser = user;

  }
  userLoginStatus() {
    const token = localStorage.getItem('id_token');
    if (token == null) {

      return false;
    } else {
      return true;
    }

  }

}
