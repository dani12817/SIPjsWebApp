import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.scss']
})
export class MyContactsComponent implements OnInit {

  myContacts: Contact[] = [];

  constructor(private route: ActivatedRoute, private myContactsServ: ContactsService) { }

  ngOnInit(): void {
    this.myContacts = this.route.snapshot.data.contactList;
  }

}
