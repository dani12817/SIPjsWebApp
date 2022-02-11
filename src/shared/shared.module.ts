import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from "@angular/common/locales/es";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { MyContactsComponent } from '../app/components/my-contacts/my-contacts.component';
import { CallLogComponent } from '../app/components/call-log/call-log.component';
import { AllContactsComponent } from '../app/components/all-contacts/all-contacts.component';
import { SettingsComponent } from '../app/components/settings/settings.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { LoginComponent } from '../app/components/login/login.component';


registerLocaleData(localeEs);

@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [ ],
  declarations: [
    LoginComponent,
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
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
      this.prepareCustomIcons();
  }

  prepareCustomIcons() {
      this.iconRegistry.addSvgIcon(
        "twitter",
        this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/twitter.svg")
      );
      this.iconRegistry.addSvgIcon(
        "google",
        this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/google.svg")
      );
  }
}