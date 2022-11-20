import { RegistrationFieldsComponent } from './registration-fields.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    RegistrationFieldsComponent
  ],

  exports: [
    RegistrationFieldsComponent
  ]
}) export class RegistrationFieldsModule {}