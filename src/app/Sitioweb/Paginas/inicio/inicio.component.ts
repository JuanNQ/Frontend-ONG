import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../Servicios/productos.service';
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})


export class InicioComponent implements OnInit {

  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5,10,20,50];
  length = 0;
  listaProductos = [];
  productoId: string | null = null;
  pagina:PageEvent | null = null;
  filtro: number = 0;

  constructor(
    private productosService:ProductosService,
    private route:ActivatedRoute
  ){}


  ngOnInit(): void{
    this.productosService.getListaProductosListados(this.pageSize,this.pageIndex,this.filtro).subscribe(data=>{
      this.listaProductos = data.content;
      this.length = data.totalElements;
      console.log(data);
      })
    this.route.queryParamMap.subscribe(parametros=>{
      this.productoId = parametros.get('producto');
      console.log(this.productoId);
    })
  }

  filtroSeleccionado(filtroOutput: number){
    this.filtro = filtroOutput;
    this.productosService.getListaProductosListados(this.pageSize,this.pageIndex,this.filtro).subscribe(data=>{
      this.listaProductos = data.content;
      this.length = data.totalElements;
      console.log(data);
    })
  }

  paginadoEvent(paginaOutput: PageEvent){
    console.log(paginaOutput);
    this.pagina = paginaOutput;
    this.length = paginaOutput.length;
    this.pageIndex = paginaOutput.pageIndex;
    this.pageSize = paginaOutput.pageSize;
    this.productosService.getListaProductosListados(this.pageSize,this.pageIndex,this.filtro).subscribe(data=>{
      this.listaProductos = data.content;
      this.length = data.totalElements;
      console.log(data);
    })
  }

}
