import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/models/user.model';
import {users} from '../../shared/users';
import {UsersService} from '../../shared/services/users.service';

@Component({
    selector: 'app-about-user',
    templateUrl: './about-user.component.html',
    styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {

    user: User;

    constructor(private route: ActivatedRoute,
                private usersService: UsersService,
                private router: Router
                ) {
    }

    ngOnInit() {
        let username = this.route.snapshot.params['username'];
        // this.user = users.find((user) => {
        //     return user.name === username;
        // })
        this.usersService.getUser(username).then(user => this.user = user)
    }

    goBack(){
        this.router.navigate(['/about'])
    }

}
