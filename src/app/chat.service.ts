import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  users: User[] = [
    {
      userName: 'admin1',
      avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-29.jpg',
      status: 'Never say never',
      password: '1233445'
    },
    {
      userName: 'admin2',
      avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-avatar-dep-doc-dao-nhat-4.jpg',
      status: 'check it out, man',
      password: '535653435'
    },
    {
      userName: 'admin3',
      avatar: 'https://i.pinimg.com/originals/f4/22/36/f422363e23bb12a9b5100b4c22c6b85a.jpg',
      status: 'something wrong',
      password: '545435425'
    },
    {
      userName: 'admin4',
      avatar: 'http://thuthuat123.com/uploads/2018/01/27/avatar-dep-nhat-49_112148.jpg',
      status: '',
      password: '5545531'
    }
  ];

  constructor() {
  }
}
