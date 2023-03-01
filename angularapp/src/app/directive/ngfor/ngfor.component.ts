import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  names: string[] = ["Atilla", "Atilla", "Atilla"]

  userList: User[] = []

  constructor() {
    this.userList.push(new User(1, "Atilla", "atilla@gmail.com"))
    this.userList.push(new User(2, "Atilla2", "atilla2@gmail.com"))
    this.userList.push(new User(3, "Atilla3", "atilla3@gmail.com"))
    this.userList.push(new User(4, "Atilla4", "atilla4@gmail.com"))
    this.userList.push(new User(5, "Atilla5", "atilla5@gmail.com"))
  }

}
