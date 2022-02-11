import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyContactsComponent } from './components/my-contacts/my-contacts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AllContactsComponent } from './components/all-contacts/all-contacts.component';
import { CallLogComponent } from './components/call-log/call-log.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-contacts',
    component: MyContactsComponent
  },
  {
    path: 'call-log',
    component: CallLogComponent
  },
  {
    path: 'all-contacts',
    component: AllContactsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  { path: '',   redirectTo: '/my-contacts', pathMatch: 'full' },
  { path: '**', component: MyContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
