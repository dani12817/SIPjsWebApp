import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { LoadingService } from './services/loading.service';
import { AuthService } from './services/auth.service';

import { buildCustomAvatar } from '../shared/shared-metods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideMenuItems: { icon: String, name: String, route: String[] }[] = [
    { icon: "contacts", name: "Mi Lista", route: ["/my-contacts"] },
    { icon: "contact_phone", name: "Registro de Llamadas", route: ["/call-log"] },
    { icon: "import_contacts", name: "Todos los Contactos", route: ["/all-contacts"] },
    { icon: "settings", name: "Configuración", route: ["/settings"] }
  ];

  currentUrl: String;

  buildCustomAvatar = buildCustomAvatar;

  constructor(private router: Router, public loadingServ: LoadingService, private authServ: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe((route: any) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.urlAfterRedirects ? route.urlAfterRedirects.split('?')[0] : route.url.split('?')[0];
        this.loadingServ.loading = false;
      } else if (route instanceof NavigationStart) {
        this.loadingServ.loading = true;
      } else if (route instanceof NavigationCancel) {
        this.loadingServ.loading = false;
      }
    });
  }

  getRouterOutletClass(): string {
    switch (this.currentUrl) {
      case null:
      case undefined:
      case '':
      case '/login':
      case '/error':
        return 'routerOutletFullSize';
      default:
        return 'routerOutletDefaultSize';
    }
  }

  logOut(): void {
    this.loadingServ.loading = true;
    this.authServ.logOut();
    this.router.navigate(['/login']);
  }
}
