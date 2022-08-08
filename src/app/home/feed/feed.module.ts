import { PostiteOnFeedModule } from './../../components/postite-on-feed/postite-on-feed.module';
import { FeedComponent } from './feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    PostiteOnFeedModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
