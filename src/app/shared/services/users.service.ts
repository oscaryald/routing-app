import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {users} from '../users';

@Injectable()
export class UsersService {

    usersPromise: Promise<User[]> = Promise.resolve(users);

    constructor() {
    }

    getUsers() {
        return this.usersPromise;
    }

    getUser(username) {
        let user = this.usersPromise.then(user => {
            return users.find(user => {
                return user.username === username;
            });
        });

        return user;
    }


}
