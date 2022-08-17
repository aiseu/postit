import { ModalPostiteComponent } from './../modal-postite/modal-postite.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postite',
  templateUrl: './postite.component.html',
  styleUrls: ['./postite.component.scss'],
})
export class PostiteComponent implements OnInit {
  
  @Input() color:string;
  @Output() dataModalPostite = new EventEmitter();

  constructor(private modalCtrl: ModalController) { }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPostiteComponent,
      componentProps: {
        color: this.color
      }
    });
    modal.present();
    
    modal.onDidDismiss().then((value:any) =>{
      console.log(value)
      this.dataModalPostite.emit(value) 
    })
  }


  ngOnInit() {}

}
