import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/models/user.model';


@Component({
    selector: 'app-about-user',
    templateUrl: './about-user.component.html',
    styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {

    user: User;

    constructor(private route: ActivatedRoute,
                private router: Router
                ) {
    }

    ngOnInit() {
        // let username = this.route.snapshot.params['username'];
        // this.usersService.getUser(username).then(user => this.user = user)
        this.route.data.forEach((data:{user: User}) => {
            console.log(data)
            this.user = data.user
        })
    }

    goBack(){
        this.router.navigate(['/about'])
    }

}
