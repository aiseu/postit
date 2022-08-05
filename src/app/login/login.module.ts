import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { LoginPage } from './login.page';
import { LoginFieldsComponent } from './login-fields/login-fields.component';

import { LoginPageRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
    HomeComponent,
    LoginFieldsComponent
  ]
})
export class LoginPageModule {}
