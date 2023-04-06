import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/Servicios/auth.service';
import { UsuariosService } from '../app/Servicios/usuarios.service';

import { TokenService } from "./Servicios/token.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ong';

  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
    private tokenService:TokenService
  ){}

  ngOnInit(): void {
    const token = this.tokenService.obtenerToken();
    if (token) {
      this.authService.perfil().subscribe();
    }
  }

  crearUsuario(){
    this.usuariosService.crearUsuario({
      nombre: 'Rosario',
      contrasenia: 'administrador2'
    }).subscribe(data=>{
      console.log(data);
    });
  }

  // ingresarUsuario(){
  //   this.authService.login('Rosario','administrador2').subscribe(data=>{
  //     console.log(data);
  //   });
  // }

  // perfilUsuario(){
  //   this.authService.profile().subscribe(data=>{
  //     console.log(data);
  //   });
  // }

}
