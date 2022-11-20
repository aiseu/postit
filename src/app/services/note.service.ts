import { UpdateNotePayload } from './../models/payload/updateNote.payload';
import { NoteProxy } from './../models/proxy/note.proxy';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpAsyncService } from "../modules/http-async/services/http-async.service";

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor(private readonly httpAsyncService: HttpAsyncService){}

  async getNote(){
    return await this.httpAsyncService.get<NoteProxy[]>(environment.api.note.getNote);
  }

  async postNote(payload: NoteProxy){
    return await this.httpAsyncService.post(environment.api.note.postNote, payload);
  }

  async deleteNote(id){
    const noteId = environment.api.note.deleteNote.replace('{noteId}', id);
    return await this.httpAsyncService.delete(noteId)
  }

  async putNote(id, payload: UpdateNotePayload){
    const noteId = environment.api.note.putNote.replace('{noteId}', id)
    return await this.httpAsyncService.put(noteId, payload);
  }

  async getPublicNote(){
    return await this.httpAsyncService.get<NoteProxy[]>(environment.api.note.publicNote)
  }

  async getOneNote(id){
    const noteId = environment.api.note.getOneNote.replace('{noteId}', id)
    return await this.httpAsyncService.get<NoteProxy>(noteId)
  }

  async getPublicNoteFromUser(id){
    const url = environment.api.note.getPublicNoteUser.replace('{userId}', id)
    return await this.httpAsyncService.get<NoteProxy[]>(url)
  }
}