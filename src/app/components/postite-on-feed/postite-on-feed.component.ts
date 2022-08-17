import { NoteCommentProxy } from './../../models/proxy/note-comment.proxy';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postite-on-feed',
  templateUrl: './postite-on-feed.component.html',
  styleUrls: ['./postite-on-feed.component.scss'],
})
export class PostiteOnFeedComponent implements OnInit {

  @Input() data: NoteCommentProxy;

  constructor(private route: Router) {}

  ngOnInit() {}

  goToComment(){
    this.route.navigate([`home/comment/${this.data.id}`]);
  }
}
