import { AlertController } from '@ionic/angular';
import { NoteCommentService } from './../../services/note-comment.service';
import { NoteService } from './../../services/note.service';
import { NoteProxy } from './../../models/proxy/note.proxy';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  public noteComment: NoteProxy;
  public noteId = 0;


  constructor(private readonly route: ActivatedRoute, private noteService: NoteService, private noteCommentService: NoteCommentService ,private router: Router, private alertController: AlertController) {
  }

  async ngOnInit() {
    this.noteId = +this.route.snapshot.paramMap.get('id');
    await this.getOnePostite()
  }

  async getOnePostite(){
   const {success, error} = await this.noteService.getOneNote(this.noteId)
   if(success) {
    this.noteComment = success
  } else {
    await this.presentAlert()
  }
}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Não foi possivel gerar o postite tente novamente',
      buttons: ['OK'],
    });

    await alert.present();
  }  

  async postComment(event){
   await this.noteCommentService.postCommentNote(this.noteComment.id, event)
   await this.getOnePostite()
  }

  goToFeed(){
    this.router.navigate(['home/feed'])
  }
}
