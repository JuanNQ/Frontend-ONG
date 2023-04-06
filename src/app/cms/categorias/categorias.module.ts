import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './Componentes/categorias/categorias.component';
import { CategoriaFormComponent } from './Componentes/categoria-form/categoria-form.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
