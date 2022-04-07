import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { buildCustomAvatar } from '../shared-metods';

import { Contact } from '../../app/models/contact';
import { AddContactDialog } from '../../app/dialogs/add-contact-dialog.component';
import { UserData } from '../../app/models/user-data';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent {
  @Input() contact: Contact;

  @Input() showAddContact: boolean = false;
  @Input() canAddContact: boolean = false;
  
  buildCustomAvatar = buildCustomAvatar;

  constructor(private dialog: MatDialog/*public siptizeServ: SiptizePhoneService, private _userLocalServ: UserLocalStorageService, private _notiToastServ: NotifyToastService*/) { }

  callExtension() {
    /*if (this.siptizeServ.calling || this.siptizeServ.inCall) {
      this._notiToastServ.notifyWithToast('Llamada en curso', 'Espera a que la actual llamada se realize para empezar otra.');
    } else {
      if ((this.extension as ContactItem).number) {
        this.extension.username = (this.extension as ContactItem).number;
      }
      this._userLocalServ.addContactToRecent(this.extension);
      this.siptizeServ.call(this.extension);
    }*/
  }

  cannotCall() {
    return false;
    //return this.siptizeServ.sessionsExist(this.extension) || !this.siptizeServ.siptizePhoneConnected;
  }

  transferCall() {
    //this.siptizeServ.transfer(this.extension.username);
  }

  openAddContactDialog(): void {
    let config: MatDialogConfig = {
      width: "320px",
      data: this.contact
    };
    this.dialog.open(AddContactDialog, config);
  }
}
