import { NoteCommentProxy } from './../../models/proxy/note-comment.proxy';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postite-on-comment',
  templateUrl: './postite-on-comment.component.html',
  styleUrls: ['./postite-on-comment.component.scss'],
})
export class PostiteOnCommentComponent implements OnInit {

  @Input() dataComment: NoteCommentProxy;

  constructor() {}

  ngOnInit() {}

}
