import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';

import { DetalleProductoComponent } from "./detalle-producto.component";
import { CompartidoModule } from "../../../compartido/compartido.module";

@NgModule({
  declarations: [
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    DetalleProductoRoutingModule,
    CompartidoModule
  ]
})
export class DetalleProductoModule { }
