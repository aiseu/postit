import { NoteProxy } from './../../models/proxy/note.proxy';
import { environment } from './../../../environments/environment';
import { UserProxy } from './../../models/proxy/user.proxy';
import { NoteService } from './../../services/note.service';
import { MenuController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  dataLocal: UserProxy;
  notePostitePublicuser: NoteProxy[] = []

  constructor(private menu:MenuController, private noteService:NoteService, private alertController: AlertController) { 
    this.dataLocal = JSON.parse(localStorage.getItem(environment.user))
  }

  async ngOnInit() {
    await this.getNoteProfile()
    this.dataLocal.role = 'Usuario'
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Não foi possivel gerar os postite tente novamente',
      buttons: ['OK'],
    });

    await alert.present();
  }  

  openMenu(){
    this.menu.open('first')
  }

  async getNoteProfile(){
     const {success, error} = await this.noteService.getPublicNoteFromUser(this.dataLocal.id)
     if(success) {
       this.notePostitePublicuser = success
     } else {
       await this.presentAlert()
     }
  }
}
