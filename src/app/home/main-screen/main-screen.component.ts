import { NoteService } from './../../services/note.service';
import { NoteProxy } from './../../models/proxy/note.proxy';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {

  notePostite: NoteProxy[] = [];

  postiteButtons: string[] = [
    '#f77d60',
    '#feb196',
    '#d7df6b',
    '#fef496',
    '#a2c8e8',
    '#c390bc'
  ];
  constructor(private note: NoteService, private alertController: AlertController) {
  }

  async getPostite(){
    const {success, error} = await this.note.getNote()
    if(success){
      this.notePostite = success;
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

  generatePostite(event){
    this.notePostite.push(event)
  }

  async ngOnInit() {
    await this.getPostite()
  }
}
