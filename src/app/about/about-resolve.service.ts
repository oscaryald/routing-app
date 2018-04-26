import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {User} from '../shared/models/user.model';
import {UsersService} from '../shared/services/users.service';


@Injectable()
export class AboutResolveService implements Resolve<User>{

  constructor(private userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot){
    return this.userService.getUsers()
        .then(users => users)
  }

}
