import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  url: string;

  constructor(private route: Router) { 
    route.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((route: NavigationEnd) => {
      const splittedUrl = route.url.split('/');
      this.url = splittedUrl[splittedUrl.length -1];
    })
  }

  ngOnInit() {}

  goToFeed() {
   this.route.navigate(['home/feed']);
  }

  goToHome() {
    this.route.navigate(['home/main']);
  }

  goToProfile() {
    this.route.navigate(['home/profile']);
  }

}
