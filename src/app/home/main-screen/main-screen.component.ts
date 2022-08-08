import { NoteProxy } from './../../models/proxy/note.proxy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {

  protected notePostite: NoteProxy[] = [
    {
      id: 1,
      title: 'Verbos',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quam, iure distinctio amet voluptatum provident tenetur',
      user: {
        id: 1,
        email: 'joão@gmail.com',
        imageUrl: 'assets/icon/favicon.png',
        name: 'João',
        password: '123'
      },
      color: '#d7df6b',
      isPublic: false
    },
    {
      id: 2,
      title: 'Sabado',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quam, iure distinctio amet voluptatum provident tenetur',
      user: {
        id: 1,
        email: 'joão@gmail.com',
        imageUrl: 'assets/icon/favicon.png',
        name: 'João',
        password: '123'
      },
      color: '#00BFFF',
      isPublic: false
    },
    {
      id: 3,
      title: 'Amigo',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quam, iure distinctio amet voluptatum provident tenetur',
      user: {
        id: 1,
        email: 'joão@gmail.com',
        imageUrl: 'assets/icon/favicon.png',
        name: 'João',
        password: '123'
      },
      color: '#c390bc',
      isPublic: false
    },
    {
      id: 4,
      title: 'Vivendo',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quam, iure distinctio amet voluptatum provident tenetur',
      user: {
        id: 1,
        email: 'joão@gmail.com',
        imageUrl: 'assets/icon/favicon.png',
        name: 'João',
        password: '123'
      },
      color: '#f77d60',
      isPublic: false
    }
  ];

  constructor() { }

  ngOnInit() {}

}
