import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider, } from 'firebase/auth';

import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, private afAuth: AngularFireAuth) { }

    public set userLogged(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public get userLogged(): User {
        return JSON.parse(localStorage.getItem('user'));
    }

    public get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user != null) ? true : false;
    }

    public loginEmailPass(loginData: { email: string, password: string }): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.signInWithEmailAndPassword(loginData.email, loginData.password).then(response => {
                console.log("signInWithEmailAndPassword", response);
                this.userLogged = new User(response.user);
                resolve(response);
            }, err => reject(err));
        });
    }

    /*public GoogleAuth(): GoogleAuthProvider {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }*/

    public handleLoginError(errorCode: String): String {
        switch (errorCode) {
            case "auth/invalid-email":
                return "El Email introducido no tiene un formato válido";
            case "auth/wrong-password":
                return "Contraseña errónea";
            default:
                return "error";
        }
    }

    public logOut(): Promise<void> {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        })
    }
}