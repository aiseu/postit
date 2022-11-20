import { ModalController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private menuCtrl: MenuController) { }

  ngOnInit() {}

  disconnect(){
    this.route.navigate([''])
    this.menuCtrl.close()
  }
}
