import { UserService } from './../../services/user.service';
import { RegisterPayload } from './../../models/payload/register.payload';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-fields',
  templateUrl: './registration-fields.component.html',
  styleUrls: ['./registration-fields.component.scss'],
})
export class RegistrationFieldsComponent implements OnInit {

  @Output() openLogin = new EventEmitter <boolean>();

  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formGroup = formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      confirmedEmail:['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password:['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      confirmedPassword:['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
    })
   }

  ngOnInit() {}

  async register(){
    const payload = this.formGroup.getRawValue() as RegisterPayload
    const {success, error} = await this.userService.register(payload)
    if(success){
      this.openLogin.emit(false);
    } else {
      return console.log(error)
    }
  }

  goToLogin(){
    this.openLogin.emit(false)
  }
}
