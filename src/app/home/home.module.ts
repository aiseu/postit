import { ProfileModule } from './profile/profile.module';
import { CommentModule } from './comment/comment.module';
import { FeedModule } from './feed/feed.module';
import { NavbarModule } from './../components/navbar/navbar.module';
import { HomeRoutingModule } from './home-routing.module';
import { MainScreenModule } from './main-screen/main-screen.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeedModule,
    IonicModule,
    MainScreenModule,
    HomeRoutingModule,
    CommentModule,
    NavbarModule,
    ProfileModule
  ],
  declarations: [
   HomeComponent
  ]
})
export class HomeModule { }
