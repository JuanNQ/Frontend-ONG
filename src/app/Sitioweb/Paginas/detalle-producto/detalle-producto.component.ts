import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../Servicios/productos.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Location } from "@angular/common";
import { TiendaService } from "src/app/Servicios/tienda.service";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  // estadoDetalleProducto: any;
  productoSeleccionado: any = {};
  productoId: string | null = null;

  constructor(
    private productosService:ProductosService,
    private route:ActivatedRoute,
    private location:Location,
    private tiendaService:TiendaService
  ){}

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap(parametros=>{
        this.productoId = parametros.get('idProducto');
        if (this.productoId) {
          return this.productosService.getProducto(this.productoId);
        }
        return [];
      })
    )
    .subscribe(data=>{
      this.productoSeleccionado = data;
      console.log(data);
    })

  }

  irAtras(){
    this.location.back();
  }

  agregarCarrito(producto: any){
    this.tiendaService.agregarCarritoProducto(producto);
  }

}
