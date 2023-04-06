import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';

import { CategoriaComponent } from './categoria.component';
import { CompartidoModule } from "../../../compartido/compartido.module";
import { QuicklinkModule } from "ngx-quicklink";

@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    CompartidoModule,
    QuicklinkModule
  ]
})
export class CategoriaModule { }
