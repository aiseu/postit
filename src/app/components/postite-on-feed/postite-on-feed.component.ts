import { NoteProxy } from './../../models/proxy/note.proxy';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postite-on-feed',
  templateUrl: './postite-on-feed.component.html',
  styleUrls: ['./postite-on-feed.component.scss'],
})
export class PostiteOnFeedComponent implements OnInit {

  @Input() data: NoteProxy;

  constructor() { console.log(this.data);}

  ngOnInit() {}

}
