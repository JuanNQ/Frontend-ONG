import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./Componentes/layout/layout.component";
import { GridComponent } from "./Paginas/grid/grid.component";
import { TasksComponent } from "./Paginas/tasks/tasks.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
