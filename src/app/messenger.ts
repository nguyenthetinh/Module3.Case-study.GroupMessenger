import {User} from './user';

export class Messenger {
  userSend: User;
  content: string;
  constructor(userSend: User, content: string) {
    this.userSend = userSend;
    this.content = content;
  }
}
