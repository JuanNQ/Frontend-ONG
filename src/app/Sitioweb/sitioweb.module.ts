import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitiowebRoutingModule } from './sitioweb-routing.module';

import { CompartidoModule } from "../compartido/compartido.module";

import { NavComponent } from './Componentes/nav/nav.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { MiCarritoComponent } from './Paginas/mi-carrito/mi-carrito.component';
import { LoginComponent } from './Paginas/login/login.component';
import { RegistroComponent } from './Paginas/registro/registro.component';
import { PerfilComponent } from './Paginas/perfil/perfil.component';
import { RecoveryComponent } from './Paginas/recovery/recovery.component';
// import { DetalleProductoComponent } from './Paginas/detalle-producto/detalle-producto.component';
import { LayaoutComponent } from './Componentes/layaout/layaout.component';

import { QuicklinkModule } from "ngx-quicklink";


@NgModule({
  declarations: [
    NavComponent,
    InicioComponent,
    MiCarritoComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    RecoveryComponent,
    LayaoutComponent,
  ],
  imports: [
    CommonModule,
    SitiowebRoutingModule,
    CompartidoModule,
    QuicklinkModule
  ]
})
export class SitiowebModule { }
