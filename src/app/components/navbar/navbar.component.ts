import { Router } from '@angular/router';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  goToFeed() {
   this.route.navigate(['home/feed']);
  }

  goToHome() {
    this.route.navigate(['home']);
  }

  goToProfile() {
    this.route.navigate(['home/profile']);
  }

}
