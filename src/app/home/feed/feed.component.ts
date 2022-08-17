import { NoteProxy } from './../../models/proxy/note.proxy';
import { SendDataService } from './../../models/proxy/send-data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  notePostite: NoteProxy[] = [];

  constructor(private data: SendDataService) {
      this.notePostite = data.getData();
   }

  ngOnInit() {}

}
