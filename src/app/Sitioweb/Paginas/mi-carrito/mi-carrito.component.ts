import { Component } from '@angular/core';
import { Producto } from "src/app/Interfaces/producto";
import { TiendaService } from "src/app/Servicios/tienda.service";

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.scss']
})
export class MiCarritoComponent {

  productosComprados: any = [];

  constructor(
    private tiendaService:TiendaService
  ){
    this.productosComprados = this.tiendaService.getProductosComprados();
  }

}
