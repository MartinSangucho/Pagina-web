import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {

  items: MenuItem[] = [];
  opciones = [
    { label: 'Opción 1', value: 'opcion1' },
    { label: 'Opción 2', value: 'opcion2' },
    { label: 'Opción 3', value: 'opcion3' }
  ];
  selectedOption: any;

  primeIcons: string[] = [
    'pi pi-align-center', 'pi pi-align-justify', 'pi pi-align-left', 'pi pi-align-right',
    'pi pi-amazon', 'pi pi-apple', 'pi pi-arrow-circle-down', 'pi pi-arrow-circle-left',
    'pi pi-arrow-circle-right', 'pi pi-arrow-circle-up', 'pi pi-arrow-down', 'pi pi-arrow-left',
    'pi pi-arrow-right', 'pi pi-arrow-up', 'pi pi-backward', 'pi pi-bars', 'pi pi-bell',
    'pi pi-book', 'pi pi-bookmark', 'pi pi-briefcase', 'pi pi-calendar', 'pi pi-camera',
    'pi pi-caret-down', 'pi pi-caret-left', 'pi pi-caret-right', 'pi pi-caret-up', 'pi pi-chart-bar',
    'pi pi-chart-line', 'pi pi-check', 'pi pi-chevron-circle-down', 'pi pi-chevron-circle-left',
    'pi pi-chevron-circle-right', 'pi pi-chevron-circle-up', 'pi pi-chevron-down', 'pi pi-chevron-left',
    'pi pi-chevron-right', 'pi pi-chevron-up', 'pi pi-clock', 'pi pi-cloud', 'pi pi-cog',
    'pi pi-comment', 'pi pi-comments', 'pi pi-copy', 'pi pi-credit-card', 'pi pi-database',
    'pi pi-desktop', 'pi pi-discord', 'pi pi-download', 'pi pi-eject', 'pi pi-ellipsis-h',
    'pi pi-ellipsis-v', 'pi pi-envelope', 'pi pi-exclamation-circle', 'pi pi-exclamation-triangle',
    'pi pi-external-link', 'pi pi-eye', 'pi pi-eye-slash', 'pi pi-facebook', 'pi pi-fast-backward',
    'pi pi-fast-forward', 'pi pi-file', 'pi pi-filter', 'pi pi-flag', 'pi pi-folder', 'pi pi-forward',
    'pi pi-github', 'pi pi-globe', 'pi pi-google', 'pi pi-heart', 'pi pi-home', 'pi pi-id-card',
    'pi pi-image', 'pi pi-images', 'pi pi-inbox', 'pi pi-info-circle', 'pi pi-info', 'pi pi-instagram',
    'pi pi-key', 'pi pi-link', 'pi pi-linkedin', 'pi pi-list', 'pi pi-lock', 'pi pi-lock-open',
    'pi pi-map', 'pi pi-map-marker', 'pi pi-microsoft', 'pi pi-minus', 'pi pi-mobile', 'pi pi-money-bill',
    'pi pi-pause', 'pi pi-paypal', 'pi pi-pencil', 'pi pi-phone', 'pi pi-play', 'pi pi-plus',
    'pi pi-power-off', 'pi pi-print', 'pi pi-question-circle', 'pi pi-reddit', 'pi pi-refresh',
    'pi pi-replay', 'pi pi-save', 'pi pi-search', 'pi pi-send', 'pi pi-share-alt', 'pi pi-shield',
    'pi pi-shopping-bag', 'pi pi-shopping-cart', 'pi pi-sign-in', 'pi pi-sign-out', 'pi pi-sitemap',
    'pi pi-slack', 'pi pi-sliders-h', 'pi pi-sliders-v', 'pi pi-sort-alpha-down', 'pi pi-sort-alpha-up',
    'pi pi-sort-alt', 'pi pi-sort-amount-down', 'pi pi-sort-amount-up', 'pi pi-sort-down',
    'pi pi-sort-numeric-down', 'pi pi-sort-numeric-up', 'pi pi-sort-up', 'pi pi-spinner', 'pi pi-star',
    'pi pi-step-backward', 'pi pi-step-forward', 'pi pi-stop', 'pi pi-sync', 'pi pi-table',
    'pi pi-tag', 'pi pi-tags', 'pi pi-th-large', 'pi pi-thumbs-down', 'pi pi-thumbs-up',
    'pi pi-ticket', 'pi pi-times', 'pi pi-trash', 'pi pi-twitter', 'pi pi-undo', 'pi pi-unlock',
    'pi pi-upload', 'pi pi-user', 'pi pi-video', 'pi pi-volume-down', 'pi pi-volume-mute',
    'pi pi-volume-off', 'pi pi-volume-up', 'pi pi-wallet', 'pi pi-whatsapp', 'pi pi-wifi', 'pi pi-youtube'
  ];

  loading = false;

  itemss = [

    { label: 'Item 1' },

    { label: 'Item 2' },

    { label: 'Item 3' }

  ];


  load() {

    this.loading = true;

    setTimeout(() => {

      this.loading = false;

    }, 2000);

  }

  constructor() {
    this.items = [
      {
        label: 'Nuevo',
        icon: PrimeIcons.PLUS
      },
      {
        label: 'Eliminar',
        icon: PrimeIcons.TRASH
      }
    ];
  }

  ngOnInit() {
  }
}
