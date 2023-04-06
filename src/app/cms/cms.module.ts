import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';

import { TasksComponent } from './Paginas/tasks/tasks.component';
import { GridComponent } from './Paginas/grid/grid.component';
import { LayoutComponent } from './Componentes/layout/layout.component';


@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
