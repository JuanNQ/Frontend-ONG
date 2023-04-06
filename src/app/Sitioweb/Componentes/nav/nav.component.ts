import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../../Servicios/tienda.service';
import { AuthService } from '../../../Servicios/auth.service';
import { ProductosService } from '../../../Servicios/productos.service';
import { switchMap } from "rxjs";
import { Router } from "@angular/router";
import { usuario } from "../../../Interfaces/usuario";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  logo: string ="../../../assets/Imagenes/Iconos/enginaut.png";
  carritoCompras: string =".../../../assets/Imagenes/Iconos/Carrito de compras.png";
  menu: string =".../../../assets/Imagenes/Iconos/Menu.png";
  toggleButton: boolean = false;
  contador= 0;
  // correo= '';
  usuario: usuario | null = null;
  montoTotal= 0;
  listaCategorias:any = [];

  constructor(
    private tiendaService:TiendaService,
    private authService:AuthService,
    private productosService:ProductosService,
    private router:Router
  ){
  }

  ngOnInit(): void{
    this.tiendaService.$miCarrito.subscribe(data=>{
      this.contador = data.length;
      console.log("22222222222",this.contador);
    });
    this.tiendaService.$monto.subscribe(data=>{
      this.montoTotal = data;
    });
    this.productosService.getTraerCategorias().subscribe(data=>{
      this.listaCategorias = data;
    });
    this.authService.$user.subscribe(data=>{
      this.usuario = data;
    })
  }

  ingresarUsuario(){
    this.authService.loginAndPerfil('Rosario','administrador2').subscribe(()=>{
      // this.usuario = response;
      this.router.navigate(['/Inicio']);
    });
  }

  cerrarSesion(){
    this.authService.cerrarSesion();
    this.usuario = null;
    this.router.navigate(['/Inicio']);
  }

  ToggleButton(){
    this.toggleButton = !this.toggleButton;
  }

}
