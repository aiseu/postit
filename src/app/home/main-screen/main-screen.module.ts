import { PostiteModule } from './../../components/postite/postite.module';
import { NavbarModule } from './../../components/navbar/navbar.module';
import { MainScreenComponent } from './main-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    PostiteModule
  ],
  exports: [
    MainScreenComponent
  ]
})
export class MainScreenModule { }
