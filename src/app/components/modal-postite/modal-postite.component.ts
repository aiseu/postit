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

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.data = {
      id: 0,
      annotation: '',
      color: this.color,
      comments: [],
      isPublic: false,
      title: '',
      user: {
        id: 0,
        email:'',
        imageUrl:'',
        name:'',
        password:'',
        role:''
      }
    }
  }

  closeModal(){
    this.modalCtrl.dismiss(this.data)
  }
}
