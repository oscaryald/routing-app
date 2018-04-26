import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';

import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    users: User[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this.usersServices.getUsers().then(users => this.users = users)

        this.route.data.forEach((data:{users: User[]}) => {
            this.users = data.users
        })
    }

}
