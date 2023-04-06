import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../../Servicios/token.service";
import { AuthService } from "../../../Servicios/auth.service";
import { usuario } from "../../../Interfaces/usuario";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: usuario | null = null;

  constructor(
    private authService:AuthService
  ){}

  ngOnInit(): void {
    this.authService.$user.subscribe(data=>{
      this.usuario = data;
    })
    // this.authService.perfil().subscribe(data=>{
    //   this.usuario = data;
    // })
  }



}
