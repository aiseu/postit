import { CommentInPostiteModule } from './../comment-in-postite/comment-in-postite.module';
import { PostiteOnCommentComponent } from './postite-on-comment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PostiteOnCommentComponent,
  ],
  imports: [
    CommonModule,
    CommentInPostiteModule
  ],
  exports: [
    PostiteOnCommentComponent,
  ]
})
export class PostiteOnCommentModule { }
