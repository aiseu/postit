import { LoginPayload } from './../../models/payload/login.payload';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.scss'],
})
export class LoginFieldsComponent implements OnInit {

  @Output() openRegistration = new EventEmitter<boolean>();

  formGroup: FormGroup;
  value:boolean;

  constructor(private route: Router, private formBuilder: FormBuilder, private userService: UserService) { 
    this.formGroup = formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    })
  }

  ngOnInit() {}

  async login(){
    const payload = this.formGroup.getRawValue() as LoginPayload
    const logged = await this.userService.login(payload);
     if(logged){
       this.formGroup.reset()
       this.value = logged
       return void this.route.navigate(['home/main']);
     } else {
       this.value = logged
     }
  }

  goToRegistration(){
    this.openRegistration.emit(true)
  }
}
