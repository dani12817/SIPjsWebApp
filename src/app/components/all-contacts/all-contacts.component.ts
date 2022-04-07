import { Component, OnInit } from '@angular/core';

import { UserData } from '../../models/user-data';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit {

  allContacts: UserData[] = [];

  contactList: Contact[] = [];

  constructor(private route: ActivatedRoute, private authServ: AuthService, private myContactsServ: ContactsService) { }

  ngOnInit(): void {
    this.allContacts = this.route.snapshot.data.allContacts;
    this.contactList = this.route.snapshot.data.contactList;
  }

  public isMe(contact: UserData): boolean {
    return contact.username === this.authServ.userLogged.username;
  }

  public isInMyContactList(contact: UserData): boolean {
    return this.contactList.findIndex(contactItem => contactItem.username === contact.username) >= 0;
  }
}
