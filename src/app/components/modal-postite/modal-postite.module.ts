import { FormsModule } from '@angular/forms';
import { ModalPostiteComponent } from './modal-postite.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ModalPostiteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalPostiteComponent
  ]
})
export class ModalPostiteModule { }
