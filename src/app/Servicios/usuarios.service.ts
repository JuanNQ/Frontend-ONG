import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = `${environment.API_URL_GATEWAY}/v1/authentication`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Basic ` + btoa('administrador:administrador')
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  crearUsuario(dto: any){
    return this.httpClient.post(`${this.url}/registrar`,dto);
  }

}
