import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaComponent } from './categoria.component';

const routes: Routes = [
  {
    path:':id',
    component: CategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
