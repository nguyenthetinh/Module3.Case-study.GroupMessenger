import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Messenger} from '../messenger';
import {User} from '../user';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-group-messenger',
  templateUrl: './group-messenger.component.html',
  styleUrls: ['./group-messenger.component.scss']
})
export class GroupMessengerComponent implements OnInit {
  users = this.chatService.users;
  user1 = this.chatService.users[0];
  user2 = this.chatService.users[1];
  content = '';
  contentStatus = '';
  messenger: Messenger[];
  messengerForm: FormGroup;
  statusFrom: FormGroup;
  user: User;

  constructor(private chatService: ChatService) {
    this.messengerForm = new FormGroup({
      messenger: new FormControl(''),
    });
    this.statusFrom = new FormGroup({
      status: new FormControl(''),
    });
    this.messenger = [new Messenger(this.user1, 'hello')];
    this.user = this.user2;
  }

  addMessenger() {
    this.messenger.push(new Messenger(this.user, this.content));
    this.content = '';
  }

  changeUser(user: User) {
    this.user = user;
  }

  changeStatus() {
    let i = 0;
    while (i < this.users.length) {
      if (this.user === this.users[i]) {
        this.users[i].status = this.contentStatus;
        break;
      }
      i ++;
    }
  }

  ngOnInit() {
  }

}
