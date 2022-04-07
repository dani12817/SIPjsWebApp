import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from './auth.service';

import { Contact } from '../models/contact';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactListLibrary = this.afs.collection<Object>("personalContacts");

  constructor(private authServ: AuthService, private afs: AngularFirestore) { }

  public getAllContacts(): Promise<UserData[]> {
    return new Promise<UserData[]>((resolve, reject) => {
      this.afs.collection<UserData>('allContacts').valueChanges().subscribe(response => {
        //console.log("getAllContacts", response);
        resolve(response);
      }, err => reject(err));
    });
  }

  public getMyContacts(): Promise<Contact[]> {
    return new Promise<Contact[]>((resolve, reject) => {
      //console.log("auth", this.authServ.userLogged);
      this.contactListLibrary.doc<{contactList: Contact[]}>(this.authServ.userLogged.username).valueChanges().subscribe(response => {
        resolve(response.contactList);
      }, err => reject(err));
    });
  }

  public addContactToList(newContact: Contact): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.getMyContacts().then(myContacts => {
        newContact.reference = this.afs.doc(`allContacts/${newContact.username}`).ref;
        myContacts.push(newContact);
        this.contactListLibrary.doc(this.authServ.userLogged.username).set({contactList: myContacts});
        resolve(true);
      }).catch(err => {
        reject(err);
      });
    });
  }
}