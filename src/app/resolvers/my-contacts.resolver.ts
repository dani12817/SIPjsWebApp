import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Injectable({
    providedIn: 'root'
})
export class MyContactsResolve implements Resolve<Contact[]> {
    constructor(private contactServ: ContactsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[]> | Promise<Contact[]> | Contact[] {
        return this.contactServ.getMyContacts();
    }
}
