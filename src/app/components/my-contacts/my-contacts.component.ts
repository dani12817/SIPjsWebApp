import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { MyContactsService } from '../../services/myContacts.service';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.scss']
})
export class MyContactsComponent implements OnInit {

  myContacts: Contact[] = [];

  constructor(private myContactsServ: MyContactsService) { }

  ngOnInit(): void {
    this.myContactsServ.getMyContacts().then(res => {
      this.myContacts = res;
    })
  }

}
