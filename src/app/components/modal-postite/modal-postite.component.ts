import { NoteService } from './../../services/note.service';
import { environment } from './../../../environments/environment';
import { UserProxy } from './../../models/proxy/user.proxy';
import { ModalController } from '@ionic/angular';
import { NoteProxy } from './../../models/proxy/note.proxy';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-postite',
  templateUrl: './modal-postite.component.html',
  styleUrls: ['./modal-postite.component.scss'],
})
export class ModalPostiteComponent implements OnInit {

  @Input() data:NoteProxy;
  @Input() color:string;
  @Input() readonly:boolean;
  @Input() indice: number;
  @Input() isUpdate: boolean = false;

  dataLocal: UserProxy;

  constructor(private modalCtrl: ModalController, private noteService: NoteService) { 
     this.dataLocal = JSON.parse(localStorage.getItem(environment.user));
  }

  ngOnInit() {
    if(!this.data)
      this.data = {
        title: '',
        annotation: '',
        user: {
          id: this.dataLocal.id,
          name: this.dataLocal.name,
          email: this.dataLocal.email,
          password: this.dataLocal.password,
          role:'Desenvolvedor',
          imageUrl:'assets/icon/schwi.jpg'
        },
        comments: [],
        color: this.color,
        isPublic: false,
        hasLiked: false
      }
  }

  async closeModal(){
    if(!this.data.annotation || !this.data.title) return;
    else if (this.data.id){
      this.modalCtrl.dismiss(await this.noteService.putNote(this.data.id, this.data))
    } else {
      this.modalCtrl.dismiss(await this.noteService.postNote(this.data))
    }
  }

  async edit(){
    if(!this.data.annotation || !this.data.title) return;
    this.readonly = !this.readonly
  }

  publicFeed(){
    if(!this.data.annotation || !this.data.title) return;
    this.data.isPublic = true
    this.modalCtrl.dismiss(this.noteService.putNote(this.data.id, this.data))
  }

  async delete(){
    await this.noteService.deleteNote(this.data.id)
    this.modalCtrl.dismiss()
  }
}
