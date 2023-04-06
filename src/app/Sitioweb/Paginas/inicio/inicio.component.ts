import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../Servicios/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  listaProductos = [];
  size = 10;
  page = 0;
  productoId: string | null = null;

  constructor(
    private productosService:ProductosService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.productosService.getListaProductosListados(10,0).subscribe(data=>{
      this.listaProductos = data.content;
      this.page += 1;
      console.log(data);
      })
    this.route.queryParamMap.subscribe(parametros=>{
      this.productoId = parametros.get('producto');
      console.log(this.productoId);
    })
  }

  paginaSiguiente(){
    this.productosService.getListaProductosListados(this.size,this.page).subscribe(data=>{
      this.listaProductos = this.listaProductos.concat(data.content);
      this.page += 1;
      console.log(data);
      })
  }
}
