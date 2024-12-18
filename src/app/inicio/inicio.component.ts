import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  items: any[] = [];

  constructor() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Productos',
        icon: 'pi pi-tags',
        items: [
          {
            label: 'Guitarras',
            icon: 'pi pi-guitar',
            routerLink: '//entregable-2'
          },
          {
            label: 'Teclados',
            icon: 'pi pi-keyboard',
            routerLink: '//entregable-2'
          },
          {
            label: 'Baterías',
            icon: 'pi pi-drum',
            routerLink: '//entregable-2'
          }
        ]
      },
      {
        label: 'Sobre Nosotros',
        icon: 'pi pi-info-circle',
        routerLink: '/about'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: '/contacto'
      }
    ];
  }
}
