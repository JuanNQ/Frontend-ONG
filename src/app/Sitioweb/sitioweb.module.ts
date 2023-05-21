import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { MaterialModule } from "../Material/material.module";

import { QuicklinkModule } from "ngx-quicklink";
import { ReactiveFormsModule } from '@angular/forms';

import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
// import { MyCustomPaginatorIntl } from "./Paginas/inicio/inicio.component";
import { MyCustomPaginatorIntl } from "src/app/compartido/Componentes/paginador-filtro/paginador-filtro.component";

// import { CargaInterceptor } from "src/app/Interceptors/carga.interceptor";
// import { HTTP_INTERCEPTORS } from "@angular/common/http";

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
    QuicklinkModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl},
  // {provide:HTTP_INTERCEPTORS, useClass: CargaInterceptor, multi: true}
  ],
})
export class SitiowebModule { }
