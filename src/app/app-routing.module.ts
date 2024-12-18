import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';
import { Entregable1Component } from './entregable-1/entregable-1.component';
import { EntregableComponent } from './entregable/entregable.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { Entregable2Component } from './entregable-2/entregable-2.component';
import { BotonesComponent } from './botones/botones.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "entregable",
    component: EntregableComponent
  },
  {
    path: "entregable-1",
    component: Entregable1Component
  },
  {
    path: "lista-trabajos",
    component: ListaTrabajosComponent
  },
  {
    path: "entregable-2",
    component: Entregable2Component
  },
  {
    path: "iconos",
    component: BotonesComponent
  },
  {
    path: "carrusel-imagenes",
    component: CarruselComponent
  },
  {
    path: "galeria-de-imagenes",
    component: GaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
