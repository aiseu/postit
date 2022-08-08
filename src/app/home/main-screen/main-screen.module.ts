import { PostiteOnScreenModule } from './../../components/postite-on-screen/postite-on-screen.module';
import { PostiteModule } from './../../components/postite/postite.module';
import { MainScreenComponent } from './main-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    PostiteModule,
    PostiteOnScreenModule
  ],
  exports: [
    MainScreenComponent
  ]
})
export class MainScreenModule { }
