import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private productosComprados: any = [];
  private monto = new BehaviorSubject(0);
  private montoTotal = 0;
  private miCarrito = new BehaviorSubject([]);

  $miCarrito = this.miCarrito.asObservable();
  $monto= this.monto.asObservable();

  constructor() { }

  agregarCarritoProducto(producto: any){
    this.productosComprados.push(producto);
    this.montoTotal += producto.precio;
    this.monto.next(this.montoTotal);
    this.miCarrito.next(this.productosComprados);
    console.log("1111111111111",this.miCarrito);
  }

  getProductosComprados(){
    return this.productosComprados;
  }

}
