import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { PrecargaService } from "./Servicios/precarga.service";
import { QuicklinkStrategy } from "ngx-quicklink";
import { AdministradorGuard } from "./Guardianes/administrador.guard";


const rutas: Routes = [
  {
    path:'',
    loadChildren: () => import('./Sitioweb/sitioweb.module').then(m => m.SitiowebModule),
    data: {
      preload: true,
    }
  },
  {
    path:'cms',
    canActivate: [AdministradorGuard],
    loadChildren: () => import('./cms/cms.module').then( m =>m.CmsModule)
  },
  {
    path:'**',
    component:NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas,{
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
