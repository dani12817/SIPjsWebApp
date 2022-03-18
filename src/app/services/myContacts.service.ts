import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root'
})
export class MyContactsService {

    constructor(private afs: AngularFirestore) { }

    getMyContacts() {
        return new Promise<Contact[]>((resolve, reject) => {
            this.afs.collection<Object>('personalContacts').doc<{contactList: Contact[]}>('daniCastellut').valueChanges().subscribe(response => {
              resolve(response.contactList);
            }, err => reject(err));
          });
    }
}