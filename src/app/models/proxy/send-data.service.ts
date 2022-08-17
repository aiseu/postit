import { NoteProxy } from './note.proxy';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  postite: any;

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
      comments: [
        {
          id: 1,
          comment: 'Lindo amigo',
          user: {
            id: 2,
            name: 'Henry',
            email: 'Henry123@gmail.com',
            password: '123',
            role: 'UX/Desing',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        },
        {
          id: 2,
          comment: 'Tem talento',
          user: {
            id: 3,
            name: 'Boris',
            email: 'Sapo@gmail.com',
            password: '123',
            role: 'Engenheiro',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        }
      ],
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
        password: '123',
        role: 'Mecanico'
      },
      comments: [
        {
          id: 1,
          comment: 'Adoraria ver mais assim',
          user: {
            id: 3,
            name: 'Brian',
            email: 'Brin@gmail.com',
            password: '123',
            role: 'Engenheiro',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        },
        {
          id: 2,
          comment: 'Amei',
          user: {
            id: 4,
            name: 'Kay',
            email: 'Kay@gmail.com',
            password: '123',
            role: 'TikToker',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        }
      ],
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
        imageUrl: 'assets/icon/schwi.jpg',
        name: 'João',
        password: '123',
        role: 'Mecanico'
      },
      comments: [
        {
          id: 1,
          comment: 'Sem palavras',
          user: {
            id: 2,
            name: 'Henry',
            email: 'Henry123@gmail.com',
            password: '123',
            role: 'UX/Desing',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        },
        {
          id: 2,
          comment: 'Chorei aqui',
          user: {
            id: 4,
            name: 'Kay',
            email: 'Kay@gmail.com',
            password: '123',
            role: 'TikToker',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        }
      ],
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
        password: '123',
        role: 'Mecanico'
      },
      comments: [
        {
          id: 1,
          comment: 'Essa dica salvou o meu dia',
          user: {
            id: 1,
            name: 'Henry',
            email: 'Henry123@gmail.com',
            password: '123',
            role: 'UX/Desing',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        },
        {
          id: 2,
          comment: 'Muito importante 😁',
          user: {
            id: 2,
            name: 'Boris',
            email: 'Sapo@gmail.com',
            password: '123',
            role: 'Engenheiro',
            imageUrl: 'assets/icon/schwi.jpg'
          }
        }
      ],
      color: '#feb196',
      isPublic: true
    }
  ];

  constructor() { }

  getData(){
    return this.notePostite;
  }
}
