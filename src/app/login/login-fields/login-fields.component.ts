import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.scss'],
})
export class LoginFieldsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  goToHome(){
    this.route.navigate(['home']);
  }
}
