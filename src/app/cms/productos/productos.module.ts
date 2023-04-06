import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoCreacionComponent } from './Componentes/producto-creacion/producto-creacion.component';
import { ProductoEdicionComponent } from './Componentes/producto-edicion/producto-edicion.component';
import { ProductosComponent } from './Componentes/productos/productos.component';


@NgModule({
  declarations: [
    ProductoCreacionComponent,
    ProductoEdicionComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
