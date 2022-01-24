import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.scss']
})
export class MyContactsComponent implements OnInit {

  myContacts: Contact[] = [
    {      
      name: "Daniel Leal perez",
      username: "dani12817"
    },
    {      
      name: "Lucia Tortosa",
      username: "kitsuneYuu"
    },
    {      
      name: "Juan Carlos Jimenez",
      username: "pinaCastalla"
    },
    {      
      name: "Rafal Padarowski",
      username: "polaco"
    },
    {      
      name: "Oscar Vicent Soriano",
      username: "oscarHak"
    },
    {      
      name: "Ionud Claudi Badea",
      username: "johnny"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
