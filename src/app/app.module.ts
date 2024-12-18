import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntregableComponent } from './entregable/entregable.component';
import { InicioComponent } from './inicio/inicio.component';
import { Entregable1Component } from './entregable-1/entregable-1.component';
import { Entregable2Component } from './entregable-2/entregable-2.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { BotonesComponent } from './botones/botones.component';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { CarruselComponent } from './carrusel/carrusel.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    EntregableComponent,
    InicioComponent,
    Entregable1Component,
    Entregable2Component,
    ListaTrabajosComponent,
    BotonesComponent,
    CarruselComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    DropdownModule,
    FormsModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    GalleriaModule,
    ImageModule,
    RatingModule,
    MenubarModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
