import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent{

  imgButton: string = '../../../assets/Imagenes/Iconos/Carrito de compras.png';

  @Output() productoSeleccionado = new EventEmitter ();
  @Output() toggleProductoSeleccionado = new EventEmitter ();

  @Input() Producto: any={
    id: '',
    name: '',
    price: 0,
    descripcion: '',
    image: ''
  }
  agregarCarrito(){
    this.productoSeleccionado.emit(this.Producto);
    console.log(this.Producto);
  }

  verDetalle(){
    this.toggleProductoSeleccionado.emit(this.Producto.id);
  }
}
