import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoadingService } from '../services/loading.service';

import { UserData } from '../models/user-data';
import { FormClass } from '../../shared/form-class';
import { ContactsService } from '../services/contacts.service';

@Component({
    selector: 'add-contact-dialog.component',
    templateUrl: 'add-contact-dialog.component.html',
})
export class AddContactDialog {

    newContactForm: FormClass;

    constructor(private dialogRef: MatDialogRef<AddContactDialog>, @Inject(MAT_DIALOG_DATA) private data: UserData, private loadingServ: LoadingService, private contactServ: ContactsService) { }

    ngOnInit(): void {
        this.createForm();
    }

    public createForm(): void {
        this.newContactForm = new FormClass(new FormGroup({
            name: new FormControl({value: '', disabled: false}, Validators.required),
            username: new FormControl({value: '', disabled: true}),
            avatar: new FormControl({value: '', disabled: false}),
            type: new FormControl({value: '', disabled: false})
        }));

        this.newContactForm.patchValue(this.data);
    }

    public saveNewContact(): void {
        this.loadingServ.loading = true;

        this.contactServ.addContactToList(this.newContactForm.getAllValue()).then().finally(() => {
            this.loadingServ.loading = false;
            this.dialogRef.close();
        });
    }

    public disableSave(): boolean {
        return this.loadingServ.loading || this.newContactForm.formIsInvalid();
    }
}