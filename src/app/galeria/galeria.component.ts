import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  images: { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string }[] = [];
  responsiveOptions: any[] = [];
  items: any[] = [];

  constructor() {
    this.images = [
      {
        itemImageSrc: 'https://images.pexels.com/photos/165972/pexels-photo-165972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/165972/pexels-photo-165972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 1',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/2261954/pexels-photo-2261954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/2261954/pexels-photo-2261954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 2',
        title: ' trompeta '
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 3',
        title: 'Guitarra'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/376452/pexels-photo-376452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/376452/pexels-photo-376452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 4',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/159420/piano-instrument-music-keys-159420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/159420/piano-instrument-music-keys-159420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 5',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/7095043/pexels-photo-7095043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/7095043/pexels-photo-7095043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 6',
        title: 'Chelo'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/860662/pexels-photo-860662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/860662/pexels-photo-860662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 7',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 8',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/164967/pexels-photo-164967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/164967/pexels-photo-164967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 9',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 10',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/35610/guitar-bass-instrument-black.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/35610/guitar-bass-instrument-black.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 11',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/7586662/pexels-photo-7586662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/7586662/pexels-photo-7586662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 12',
        title: 'Paisaje'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

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
