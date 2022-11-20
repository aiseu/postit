import { ModalPostiteComponent } from './../modal-postite/modal-postite.component';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteProxy } from './../../models/proxy/note.proxy';

@Component({
  selector: 'app-postite-on-screen',
  templateUrl: './postite-on-screen.component.html',
  styleUrls: ['./postite-on-screen.component.scss'],
})
export class PostiteOnScreenComponent implements OnInit {

  @Input() data: NoteProxy;
  @Input() index: number;
  @Output() refresh: EventEmitter<boolean> =  new EventEmitter<boolean>();

  constructor(private modalCtrl: ModalController) { }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPostiteComponent,
      componentProps: {
        color: this.data.color,
        data: this.data,
        readonly: !!this.data.annotation,
        indice: this.index,
        isUpdate: true
      }
    });

    modal.onDidDismiss().then(() => {
      this.refresh.emit(true)
    })

    modal.present();
  }

  ngOnInit() {}

}
