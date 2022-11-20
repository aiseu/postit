import { NoteProxy } from './../models/proxy/note.proxy';
import { NoteCommentProxy } from './../models/proxy/note-comment.proxy';
import { environment } from './../../environments/environment';
import { HttpAsyncService } from './../modules/http-async/services/http-async.service';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class NoteCommentService {

  constructor(private readonly httpAsyncService: HttpAsyncService){}

  async postCommentNote(id, payload:NoteCommentProxy){
    const url = environment.api.noteComment.post.replace('{noteId}', id)
    await this.httpAsyncService.post<NoteCommentProxy>(url, payload)
  }
}