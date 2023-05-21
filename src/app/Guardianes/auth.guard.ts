import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

import { TokenService } from "../Servicios/token.service";
import { AuthService } from "../Servicios/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService:TokenService,
    private router:Router,
    private authService:AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const token = this.tokenService.obtenerToken();
    // if(!token){
    //   this.router.navigate(['/Inicio']);
    //   return false;
    // }
    // return true;
    return this.authService.$user
    .pipe(
      map(usuario=>{
        if (!usuario) {
          this.router.navigate(['/InicioSesion'])
          return false;
        }
        return true;
      })
    )
  }

}
