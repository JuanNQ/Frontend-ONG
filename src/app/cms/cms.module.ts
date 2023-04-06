import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';

import { TasksComponent } from './Paginas/tasks/tasks.component';
import { GridComponent } from './Paginas/grid/grid.component';
import { LayoutComponent } from './Componentes/layout/layout.component';
import { NavComponent } from './Componentes/nav/nav.component';


@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayoutComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
