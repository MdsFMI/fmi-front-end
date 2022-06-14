import { Component, OnInit } from '@angular/core';

export class User {
  id: string;
  email: string;
  name: string;
  birthday: Date;
  constructor(id: string, email: string, name: string, birthday: Date){
    this.id = id;
    this.email = email;
    this.name = name;
    this.birthday = birthday;
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
