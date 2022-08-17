import { CommentComponent } from './comment/comment.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from '../home/feed/feed.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainScreenComponent
      },
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'comment/:id',
        component: CommentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
