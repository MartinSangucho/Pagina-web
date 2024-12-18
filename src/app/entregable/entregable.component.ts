import { Component } from '@angular/core';

@Component({
  selector: 'app-entregable',
  templateUrl: './entregable.component.html',
  styleUrl: './entregable.component.scss'
})
export class EntregableComponent {
  items: any[] = [];

  constructor() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Tipos de Instrumentos',
        icon: 'pi pi-tags',
        RouterLink: '/entregable-2',
        items: [
          {
            label: 'Instrumento de Cuerda',
            icon: 'pi pi-guitar',
            routerLink: '/entregable-2'
          },
          {
            label: 'Instrumento de Cuerda Frotada',
            icon: 'pi pi-keyboard',
            routerLink: '/entregable-2'
          },
          {
            label: 'Instrumento de Viento',
            icon: 'pi pi-drum',
            routerLink: '/entregable-2'
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
