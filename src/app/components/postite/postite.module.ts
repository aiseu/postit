import { ModalPostiteModule } from './../modal-postite/modal-postite.module';
import { PostiteComponent } from './postite.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PostiteComponent
  ],
  imports: [
    CommonModule,
    ModalPostiteModule
  ],
  exports: [
    PostiteComponent
  ]
})
export class PostiteModule { }
