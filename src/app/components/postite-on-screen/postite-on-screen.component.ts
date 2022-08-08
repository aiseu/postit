import { Component, Input, OnInit } from '@angular/core';
import { NoteProxy } from './../../models/proxy/note.proxy';

@Component({
  selector: 'app-postite-on-screen',
  templateUrl: './postite-on-screen.component.html',
  styleUrls: ['./postite-on-screen.component.scss'],
})
export class PostiteOnScreenComponent implements OnInit {

  @Input() data: NoteProxy;

  constructor() { }

  ngOnInit() {}

}
