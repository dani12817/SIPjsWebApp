import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from "@angular/common/locales/es";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'; 

import { MyContactsComponent } from '../app/components/my-contacts/my-contacts.component';
import { CallLogComponent } from '../app/components/call-log/call-log.component';
import { AllContactsComponent } from '../app/components/all-contacts/all-contacts.component';
import { SettingsComponent } from '../app/components/settings/settings.component';
import { ContactItemComponent } from './contact-item/contact-item.component';


registerLocaleData(localeEs);

@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [ ],
  declarations: [
    MyContactsComponent,
    CallLogComponent,
    AllContactsComponent,
    SettingsComponent,
    ContactItemComponent
  ],
  entryComponents: [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  constructor() {}
}