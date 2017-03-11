import { User } from './user'

export class SelectableUser {
    user: User;
    selected: boolean;

    constructor(user: User) {
        this.user = user;
    }
}