import { AlertController } from '@ionic/angular';
import { NoteService } from './../../services/note.service';
import { NoteProxy } from './../../models/proxy/note.proxy';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  notePostite: NoteProxy[] = [];

  constructor(private noteService: NoteService, private alertController: AlertController) {
   }

   async getPostitePublics(){
    const {success, error} = await this.noteService.getPublicNote()
    if(success) {
      this.notePostite = success
    } else {
      await this.presentAlert()
    }
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Não foi possivel gerar os postite tente novamente',
      buttons: ['OK'],
    });

    await alert.present();
  }  

 async ngOnInit() {
  await this.getPostitePublics()
 }
}
