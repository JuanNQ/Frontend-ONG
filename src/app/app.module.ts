import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';

import { QuicklinkModule } from "ngx-quicklink";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CargaInterceptor } from "src/app/Interceptors/carga.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuicklinkModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: CargaInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
