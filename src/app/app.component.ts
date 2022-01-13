import { Component } from '@angular/core';

import { buildCustomAvatar } from '../shared/shared-metods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideMenuItems: { icon: String, name: String, route: String[] }[] = [
    { icon: "contacts", name: "Mi Lista", route: ["/my-contacts"] },
    { icon: "contact_phone", name: "Registro de Llamadas", route: ["/call-log"] },
    { icon: "import_contacts", name: "Todos los Contactos", route: ["/all-contacts"] },
    { icon: "settings", name: "Configuración", route: ["/settings"] }
  ];

  buildCustomAvatar = buildCustomAvatar;
}
