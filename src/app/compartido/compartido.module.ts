import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { ImgComponent } from '../compartido/Componentes/img/img.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { ListaDeProductosComponent } from './Componentes/lista-de-productos/lista-de-productos.component';
import { PaginadorFiltroComponent } from './Componentes/paginador-filtro/paginador-filtro.component';

import { MaterialModule } from "src/app/Material/material.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './Componentes/spinner/spinner.component';

@NgModule({
  declarations: [
    ImgComponent,
    ProductoComponent,
    ListaDeProductosComponent,
    PaginadorFiltroComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    ImgComponent,
    ProductoComponent,
    ListaDeProductosComponent,
    PaginadorFiltroComponent,
    SpinnerComponent
  ]
})
export class CompartidoModule { }
