import { UserCredential } from "firebase/auth";

export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;

    constructor(userData: firebase.default.User) {
        this.email = userData.uid;
        this.displayName = userData.displayName;
        this.photoURL = userData.photoURL;
        this.emailVerified = userData.emailVerified;
    }
 }