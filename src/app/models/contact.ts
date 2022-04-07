import { DocumentReference } from "@angular/fire/compat/firestore";

export class Contact {
    name?: string;
    username?: string;
    reference?: DocumentReference;
}