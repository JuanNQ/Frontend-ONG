import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { ImgComponent } from '../compartido/Componentes/img/img.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { ListaDeProductosComponent } from './Componentes/lista-de-productos/lista-de-productos.component';



@NgModule({
  declarations: [
    ImgComponent,
    ProductoComponent,
    ListaDeProductosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ImgComponent,
    ProductoComponent,
    ListaDeProductosComponent,
  ]
})
export class CompartidoModule { }
