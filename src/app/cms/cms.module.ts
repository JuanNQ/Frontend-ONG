import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';

import { TasksComponent } from './Paginas/tasks/tasks.component';
import { GridComponent } from './Paginas/grid/grid.component';
import { LayoutComponent } from './Componentes/layout/layout.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { BasicFormComponent } from './Componentes/basic-form/basic-form.component';

import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../Material/material.module";


@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayoutComponent,
    NavComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CmsModule { }
