import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from "../Servicios/auth.service";
import { TokenService } from "../Servicios/token.service";

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.authService.$user
    // .pipe(
    //   map(usuario=>{
    //     if (usuario?.role === 'ADMIN') {
    //       return true;
    //     } else {
    //       this.router.navigate(['/Inicio']);
    //       return false;
    //     }
    //   })
    // )
    const rol = this.authService.obtenerRol();
    if (rol === 'ADMIN') {
      return true;
    } else{
      this.router.navigate(['/Inicio']);
      return false;
    }
  }

}
