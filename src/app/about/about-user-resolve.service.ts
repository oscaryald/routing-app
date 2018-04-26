import {Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {User} from '../shared/models/user.model';
import {UsersService} from '../shared/services/users.service';


@Injectable()
export class AboutUserResolveService implements Resolve<User> {

    constructor(private userService: UsersService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        let username = route.params['username'];

        return this.userService.getUser(username)
            .then(user => {
                if (user) {
                    return user;
                } else {
                    this.router.navigate(['/about']);
                    return false;
                }
            });
    }

}
