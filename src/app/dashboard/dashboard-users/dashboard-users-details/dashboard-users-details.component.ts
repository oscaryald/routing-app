import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../shared/services/users.service';
import {User} from '../../../shared/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-users-details',
  templateUrl: './dashboard-users-details.component.html',
  styleUrls: ['./dashboard-users-details.component.css']
})
export class DashboardUsersDetailsComponent implements OnInit {

    user: User;
    editName: string


    constructor(private userService: UsersService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {

        this.route.params.forEach(params => {
            let username = params['username'];

            this.userService.getUser(username).then(user => {
                this.user = user;
                this.editName = user.name
            });
        })
    }

    onCancel(){
        this.router.navigate(['/dashboard/users'])
    }

    onSave(){
        this.user.name = this.editName;
        this.router.navigate(['/dashboard/users'])
    }

    canDeactivate(){
        console.log('i am navigating away')
        if(this.user.name !== this.editName){
            return window.confirm('Discard changes?');
        }
        return true
    }

}
