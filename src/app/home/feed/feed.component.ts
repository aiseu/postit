import { NoteProxy } from './../../models/proxy/note.proxy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  protected notePostite: NoteProxy[] = [
    {
      id: 1,
      title: 'Verbos',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quam, iure distinctio amet voluptatum provident tenetur',
      user: {
        id: 1,
        email: 'joão@gmail.com',
        imageUrl: 'assets/icon/schwi.jpg',
        name: 'João',
        password: '123',
        role: 'Mecanico'
      },
      color: '#d7df6b',
      isPublic: true
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
      color: '#a2c8e8',
      isPublic: true
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
      isPublic: true
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
      color: '#feb196',
      isPublic: true
    }

  ];

  constructor() { }

  ngOnInit() {}

}
