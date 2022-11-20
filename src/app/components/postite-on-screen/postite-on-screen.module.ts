import { ModalPostiteModule } from './../modal-postite/modal-postite.module';
import { PostiteOnScreenComponent } from './postite-on-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PostiteOnScreenComponent
  ],
  imports: [
    CommonModule,
    ModalPostiteModule
  ],
  exports: [
    PostiteOnScreenComponent
  ]
})
export class PostiteOnScreenModule { }
