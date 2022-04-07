import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ContactsService } from '../services/contacts.service';

import { UserData } from '../models/user-data';

@Injectable({
    providedIn: 'root'
})
export class AllContactsResolve implements Resolve<UserData[]> {
    constructor(private contactServ: ContactsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserData[]> | Promise<UserData[]> | UserData[] {
        return this.contactServ.getAllContacts();
    }
}
