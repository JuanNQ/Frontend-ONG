import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './Paginas/inicio/inicio.component';
import { PerfilComponent } from "./Paginas/perfil/perfil.component";
import { LayaoutComponent } from './Componentes/layaout/layaout.component';
import { RegistroComponent } from './Paginas/registro/registro.component';
import { LoginComponent } from "./Paginas/login/login.component";
import { MiCarritoComponent } from "src/app/Sitioweb/Paginas/mi-carrito/mi-carrito.component";

import { AuthGuard } from "../Guardianes/auth.guard";
import { ExitGuard } from "../Guardianes/exit.guard";

const routes: Routes = [
  {
    path:'',
    component: LayaoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/Inicio',
        pathMatch: 'full'
      },
      {
        path:'Inicio',
        component: InicioComponent
      },
      {
        path:'Categoria',
        loadChildren: () => import('./Paginas/categoria/categoria.module').then(m => m.CategoriaModule),
        data: {
          preload: true,
        }
      },
      {
        path:'Producto',
        loadChildren: () => import('./Paginas/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoModule)
      },
      {
        path: 'Perfil',
        canActivate: [AuthGuard],
        component: PerfilComponent
      },
      {
        path: 'Registro',
        canDeactivate: [ExitGuard],
        component: RegistroComponent
      },
      {
        path: 'InicioSesion',
        component: LoginComponent
      },
      {
        path: 'CarritoCompras',
        component: MiCarritoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitiowebRoutingModule { }
