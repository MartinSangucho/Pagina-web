import { Component } from '@angular/core';

@Component({
  selector: 'app-entregable-2',
  templateUrl: './entregable-2.component.html',
  styleUrl: './entregable-2.component.scss'
})
export class Entregable2Component {
  value: string = ''; 
  cards = [
    {
      title: 'Guitarra',
      subtitle: 'Instrumento de Cuerda',
      image: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'La guitarra eléctrica es un tipo de guitarra que se diferencia de la guitarra acústica principalmente por su construcción y el método de amplificación del sonido. En lugar de depender de una caja de resonancia para amplificar el sonido de las cuerdas, la guitarra eléctrica utiliza pastillas (pickups) y un amplificador para generar y proyectar el sonido la Gibson Les Paul tiene un cuerpo sólido con una tapa de arce.',
    },
    {
      title: 'Violín',
      subtitle: 'Instrumento de Cuerda Frotada',
      image: 'https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Es un instrumento musical de cuerda frotada, compuesto por una caja de resonancia, un mástil y cuatro cuerdas afinadas en quintas. Se toca mediante un arco, que se frota sobre las cuerdas, produciendo así el sonido. Es conocido por su tono brillante y expresivo, y se utiliza principalmente en música clásica, aunque también se emplea en otros géneros como el jazz y la música popular.',
    },
    {
      title: 'Violonchelo (Cello)',
      subtitle: 'Instrumento de Cuerda Frotada',
      image: 'https://images.pexels.com/photos/7095812/pexels-photo-7095812.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Es un instrumento de cuerda frotada de gran tamaño, con cuatro cuerdas afinadas en cuartas. Se toca con un arco que se pasa sobre las cuerdas, produciendo un sonido profundo y cálido. El violonchelo se sostiene en posición vertical entre las piernas del músico y es conocido por su capacidad para expresar una amplia gama de emociones, desde tonos suaves y melódicos hasta pasajes dramáticos.',
    },
    {
      title: 'Arpa',
      subtitle: 'Instrumento de Cuerda Pulsada',
      image: 'https://images.pexels.com/photos/25182746/pexels-photo-25182746/free-photo-of-harfistka-aneta-jakubcova.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Es un instrumento de cuerda pulsada, compuesto por una gran caja de resonancia y una serie de cuerdas afinadas que se tocan con los dedos. Su forma triangular y su tamaño varía según el tipo de arpa, pero generalmente tiene cuerdas de diferentes longitudes que producen notas musicales. El arpa se utiliza en diversos géneros musicales, especialmente en la música clásica y el folklore, y es conocida por su sonido suave, melódico y envolvente.',
    },
    {
      title: 'Órgano',
      subtitle: 'Instrumento de Viento',
      image: 'https://images.pexels.com/photos/22668400/pexels-photo-22668400/free-photo-of-edificio-pared-muro-iglesia.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Es un instrumento de viento que produce sonido cuando el aire pasa a través de tubos o lengüetas, impulsado por un sistema mecánico o eléctrico. Se toca mediante teclados con las manos y pedales con los pies. Su sonido puede ser muy variado, desde suaves y melódicos hasta potentes y resonantes. El órgano es comúnmente utilizado en música clásica, especialmente en iglesias y conciertos, y es conocido por su capacidad.',
    },
    {
      title: 'Acordeón',
      subtitle: 'Instrumento de Viento-Reed',
      image: 'https://images.pexels.com/photos/8520185/pexels-photo-8520185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'El acordeón tiene un teclado o botones en ambos lados. En el lado derecho (generalmente) se encuentra un teclado similar al de un piano, y en el lado izquierdo, un conjunto de botones que controlan las notas bajas, así como los acordes. A medida que el músico maneja el fuelle con una mano, la otra manipula las teclas o botones para producir las notas y acordes.Este instrumento se utiliza en diversos géneros musicales.',
    }
  ];

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