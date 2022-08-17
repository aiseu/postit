import { NoteCommentProxy } from './../../models/proxy/note-comment.proxy';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-in-postite',
  templateUrl: './comment-in-postite.component.html',
  styleUrls: ['./comment-in-postite.component.scss'],
})
export class CommentInPostiteComponent implements OnInit {

  @Input() userDataCommented: NoteCommentProxy;

  constructor() { }

  ngOnInit() { }

}
