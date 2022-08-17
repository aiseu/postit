import { PostiteOnCommentModule } from './../../components/postite-on-comment/postite-on-comment.module';
import { CommentComponent } from './comment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostiteOnCommentModule
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule { }
