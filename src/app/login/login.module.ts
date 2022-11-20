import { RegistrationFieldsModule } from './registration-fields/registration-fields.module';
import { LoginFieldsModule } from './login-fields/login-fields.module';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

import { LoginPageRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    LoginFieldsModule,
    RegistrationFieldsModule
  ],
  declarations: [
    LoginPage,
    HomeComponent,
  ]
})
export class LoginPageModule {}
