import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./Componentes/layout/layout.component";
import { GridComponent } from "./Paginas/grid/grid.component";
import { TasksComponent } from "./Paginas/tasks/tasks.component";

import { BasicFormComponent } from "./Componentes/basic-form/basic-form.component";

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'Grid',
        pathMatch:'full'
      },
      {
        path:'Grid',
        component:GridComponent
      },
      {
        path:'Tasks',
        component:TasksComponent
      },
      {
        path:'basic',
        component: BasicFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
