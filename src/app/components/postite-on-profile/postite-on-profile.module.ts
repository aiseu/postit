import { CommonModule } from '@angular/common';
import { PostiteOnProfileComponent } from './postite-on-profile.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    PostiteOnProfileComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    PostiteOnProfileComponent
  ]
})
export class PostiteOnProfileModule {}