import { Profile } from './profile';

export class User {

    constructor(
        public id: number,
        public username: string,
        public image: String,
        public profile: Profile
    ) { }
}
