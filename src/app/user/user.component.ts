import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  private _token: any = [];
  public _userdata: any;
  public _user: any;
  public _fullname: any;
  public _major: any;

  constructor() {
  }

  public async getToken(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        this._token = c.substring(cookieName.length, c.length);
      }
    }
  }

  public decodeToken() {
    this._token = jwt_decode(this._token);
    console.log(this._token);
  }

  ngOnInit() {
    this.getToken('cas_user');
    this.decodeToken();
  };
}
