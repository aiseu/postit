import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  checker:boolean;

  constructor() {}

  receiveEvent(event){
    this.checker = event
  }
}
