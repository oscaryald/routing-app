import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {users} from '../shared/users';
import {UsersService} from '../shared/services/users.service';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    users: User[];

    constructor(private usersServices: UsersService) {
    }

    ngOnInit() {
        this.usersServices.getUsers().then(users => this.users = users)
    }

}
