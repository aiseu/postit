import { NoteCommentService } from './../../services/note-comment.service';
import { environment } from './../../../environments/environment';
import { UserProxy } from './../../models/proxy/user.proxy';
import { NoteProxy } from './../../models/proxy/note.proxy';
import { NoteCommentProxy } from './../../models/proxy/note-comment.proxy';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-postite-on-comment',
  templateUrl: './postite-on-comment.component.html',
  styleUrls: ['./postite-on-comment.component.scss'],
})
export class PostiteOnCommentComponent implements OnInit {

  @Input() dataComment: NoteProxy;
  @Output() sendComment = new EventEmitter();

  data: NoteCommentProxy;
  like: boolean = false;
  dataLocal: UserProxy;

  constructor() {
    this.dataLocal = JSON.parse(localStorage.getItem(environment.user))
  }

   ngOnInit() {
    this.data = {
        comment: '',
        user: {
            id: this.dataLocal.id,
            name: this.dataLocal.name,
            email: this.dataLocal.email,
            password: '',
            role: '',
            imageUrl: 'assets/icon/schwi.jpg'
        }
    }
  }

  async publish(){
    if(!this.data.comment || this.data.comment.trim() === '') return;
    this.sendComment.emit(this.data)
  }

  clear(){
    this.data.comment = '';
  }

  enjoy(){
    this.like = !this.like
  }
}
