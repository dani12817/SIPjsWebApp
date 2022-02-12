import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyContactsComponent } from './components/my-contacts/my-contacts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AllContactsComponent } from './components/all-contacts/all-contacts.component';
import { CallLogComponent } from './components/call-log/call-log.component';
import { LoginComponent } from './components/login/login.component';

import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'my-contacts',
    component: MyContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'call-log',
    component: CallLogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'all-contacts',
    component: AllContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  { path: '',   redirectTo: '/my-contacts', pathMatch: 'full' },
  { path: '**', component: MyContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
