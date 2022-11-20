import { PostiteOnProfileModule } from './../../components/postite-on-profile/postite-on-profile.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    ProfileComponent
  ], 

  imports: [
    CommonModule,
    PostiteOnProfileModule
  ],

  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }