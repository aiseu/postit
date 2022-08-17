import { SendDataService } from './../../models/proxy/send-data.service';
import { NoteProxy } from './../../models/proxy/note.proxy';
import { Component, OnInit } from '@angular/core';

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
  constructor(private data: SendDataService) {
    this.notePostite = data.getData();
  }

  generatePostite(event){
    this.notePostite.push(event)
  }

  ngOnInit() {}
}
