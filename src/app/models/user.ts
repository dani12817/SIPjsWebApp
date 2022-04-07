import { UserData } from './user-data';

export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    username: string;

    constructor(userData: firebase.default.User, firebaseUser: UserData) {
        this.uid = userData.uid;
        this.email = userData.email;
        this.displayName = firebaseUser.name;
        this.photoURL = userData.photoURL;
        this.emailVerified = userData.emailVerified;
        this.username = firebaseUser.username;
    }
 }