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
    IonicModule,
    MainScreenModule,
    HomeRoutingModule,
    NavbarModule,
  ],
  declarations: [
   HomeComponent,
  ]
})
export class HomeModule { }
