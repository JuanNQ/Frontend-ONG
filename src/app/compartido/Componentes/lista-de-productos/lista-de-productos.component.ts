import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { TiendaService } from 'src/app/Servicios/tienda.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.scss']
})
export class ListaDeProductosComponent {

  @Input() listaProductos: any = [];
  @Output() pagSiguiente = new EventEmitter();
  @Input()
  set productoId(id: string | null){
    if (id) {
      this.verDetalleProducto(id);
    }
  }

  ProductosComprados: any = [];
  productoSeleccionado: any = {};
  estadoDetalleProducto: any;

  constructor(
    private productosService:ProductosService,
    private tiendaService:TiendaService
  ){
    // this.ProductosComprados=tiendaService.getProductosComprados();
  }

  agregarCarritoTienda(Producto: any){
    this.tiendaService.agregarCarritoProducto(Producto);
  }

  verDetalleProducto(id: string){
    this.estadoDetalleProducto = !this.estadoDetalleProducto;
    this.productosService.getProducto(id).subscribe(data=>{
      this.productoSeleccionado = data;
      console.log(data);
    })
  }

  estadoMaestroDetalleProducto(){
    this.estadoDetalleProducto = !this.estadoDetalleProducto;
  }

  paginaSiguiente(){
    this.pagSiguiente.emit();
  }

}
