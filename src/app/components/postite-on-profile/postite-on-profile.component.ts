import { environment } from './../../../environments/environment';
import { UserProxy } from './../../models/proxy/user.proxy';
import { NoteProxy } from './../../models/proxy/note.proxy';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postite-on-profile',
  templateUrl: './postite-on-profile.component.html',
  styleUrls: ['./postite-on-profile.component.scss'],
})
export class PostiteOnProfileComponent implements OnInit {

  @Input() data: NoteProxy;
  dataLocal: UserProxy;

  like: boolean = false;

  constructor(private route: Router) {
    this.dataLocal = JSON.parse(localStorage.getItem(environment.user))
  }

  ngOnInit() {}

  goToComment(){
    this.route.navigate([`home/comment/${this.data.id}`]);
  }

  enjoy(){
    this.like = !this.like
  }
}
