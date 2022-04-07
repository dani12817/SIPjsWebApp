import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider, } from 'firebase/auth';

import { User } from '../models/user';
import { UserData } from '../models/user-data';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

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

    public checkUsernameExist(loginData): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.afs.collection<UserData>('allContacts', ref => ref.where("username", "==", loginData.username)).valueChanges().subscribe(firebaseUser => {
                resolve(firebaseUser.length > 0);
            }, err => reject(err));
        });
    }

    public checkEmailExist(loginData): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.afs.collection<UserData>('allContacts').doc(loginData.email).valueChanges().subscribe(firebaseUser => {
                resolve(firebaseUser !== undefined);
            }, err => reject(err));
        });
    }

    public loginEmailPass(loginData: { email: string, password: string }): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.afAuth.signInWithEmailAndPassword(loginData.email, loginData.password).then(response => {
                console.log("signInWithEmailAndPassword", response);
                this.afs.collection<Object>('allContacts').doc<UserData>(response.user.email).valueChanges().subscribe(firebaseUser => {
                    //console.log(response.user.email, firebaseUser);
                    this.userLogged = new User(response.user, firebaseUser);
                    resolve(true);
                }, err => reject(err));
            }, err => reject(err));
        });
    }

    /*public GoogleAuth(): GoogleAuthProvider {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }*/

    public handleLoginError(errorCode: string): string {
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