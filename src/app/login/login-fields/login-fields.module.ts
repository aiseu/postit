import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginFieldsComponent } from './login-fields.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    LoginFieldsComponent
  ],

  exports: [
    LoginFieldsComponent
  ]
}) export class LoginFieldsModule {}