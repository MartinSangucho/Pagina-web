import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {
  products = [
    {
      name: 'Saxofon',
      price: 700,
      image: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Piano',
      price: 1000,
      image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg',
      inventoryStatus: 'LOWSTOCK',
      rating: 5
    },
    {
      name: 'Bateria',
      price: 900,
      image: 'https://images.pexels.com/photos/237464/pexels-photo-237464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      inventoryStatus: 'OUTOFSTOCK',
      rating: 3
    },
    {
      name: 'Violin',
      price: 700,
      image: 'https://images.pexels.com/photos/752535/pexels-photo-752535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      name: 'Guitarra',
      price: 150,
      image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  getSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; 
    }
  }

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
