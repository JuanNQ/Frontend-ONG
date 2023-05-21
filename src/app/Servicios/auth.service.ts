import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { checkToken } from "../Interceptors/token.interceptor";
import { TokenService } from "./token.service";
import { usuario } from "../Interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = `${environment.API_URL_GATEWAY}/v1/authentication`
  private url2: string = `${environment.API_URL_GATEWAY}/v1/usuario`

  private user = new BehaviorSubject <usuario|null>(null);
  $user = this.user.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      // Authorization: `Bearer ` + btoa('administrador:administrador')
    })
  }


  constructor(
    private httpClient:HttpClient,
    private tokenService:TokenService
  ) { }

  login(nombre: string, contrasenia:string) : Observable<string>{
    return this.httpClient.post(`${this.url}/login`, {nombre,contrasenia}, {responseType: 'text' ,headers: this.httpOptions.headers} )
    .pipe(
      tap(token=>{
        this.tokenService.guardarToken(token);
      })
    )
  }

  perfil(){
    return this.httpClient.get<usuario>(`${this.url2}/perfil`, { context:checkToken()})
    .pipe(
      tap(data=>{
        this.user.next(data);
        localStorage.setItem('role',data.role);
      })
    ) //, { context:checkToken()}
  }

  loginAndPerfil(nombre: string, contrasenia: string){
    return this.login(nombre,contrasenia).pipe(
      switchMap(()=> this.perfil())
    );
  }

  cerrarSesion(){
    this.user.next(null);
    this.tokenService.eliminarToken();
  }

  obtenerRol(){
    const rol = localStorage.getItem('role');
    return rol
  }

}
