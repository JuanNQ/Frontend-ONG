import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../Servicios/token.service';

const CHECK_TOKEN = new HttpContextToken<boolean>(()=>false);

export function checkToken(){
  return new HttpContext().set(CHECK_TOKEN,true);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService:TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(CHECK_TOKEN)) {
      request = this.agregarToken(request);
      return next.handle(request);
    }
    return next.handle(request);
  }

  private agregarToken(request: HttpRequest<unknown>){
    const token = this.tokenService.obtenerToken();
    if(token){
      const authRequest = request.clone({
        headers: request.headers.set('Authorization',`Bearer ${token}`)
      });
      return authRequest;
    }
    return request;
  }
}
