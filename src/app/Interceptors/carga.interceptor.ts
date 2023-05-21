import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { CargaService } from "src/app/Servicios/carga.service";

@Injectable()
export class CargaInterceptor implements HttpInterceptor {

  private totalRequest = 0;

  constructor(
    private cargaService:CargaService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequest++;
    this.cargaService.setEstadoCarga(true);
    return next.handle(request).pipe(
      finalize(()=>{
        this.totalRequest--;
        if (this.totalRequest == 0) {
          this.cargaService.setEstadoCarga(false);
        }
      })
    );
    // return next.handle(request);
  }
}
