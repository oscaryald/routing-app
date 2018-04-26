import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {

  users: User[];


  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }

}
