import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../Servicios/productos.service';
import { ActivatedRoute } from "@angular/router";
import { pipe, switchMap } from "rxjs";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit{

  categoriaId: string | null = null;
  productoId: string | null = null;
  productosPorCategoria = [];
  productosPorCategoriaM = [];
  // size = 10;
  // page = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5,10,20,50];
  length = 0;
  pagina:PageEvent | null = null;
  filtro: number = 0;
  search: string = '';

  constructor(
    private productosService:ProductosService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {

      this.route.paramMap.pipe(
        switchMap(parametros=>{
          // this.categoriaId == parametros.get('id')?this.filtro:this.filtro=0;
          // this.categoriaId == parametros.get('id')?this.filtro:this.filtro=0;
          if (this.categoriaId != parametros.get('id')) {
            this.pageIndex = 0;
            this.filtro = 0;
            this.search = '';
          }
          this.categoriaId = parametros.get('id')
          if (this.categoriaId) {
            console.log("primero");

            return this.productosService.getProductosPorCategoria(this.categoriaId,this.pageIndex,this.pageSize,this.filtro);
          }
          return [];
        })
      )
      .subscribe(data=>{
        console.log(data);
        this.productosPorCategoria = data.content;
        console.log("primero");

        this.productosPorCategoriaM = data.content;
        this.length = data.totalElements;
        // this.page += 1;
      })

      this.route.queryParamMap.subscribe(parametros=>{
        this.productoId = parametros.get('producto')
      })

  }

  filtroSeleccionado(filtroOutput: number){
    this.filtro = filtroOutput;
    this.pageIndex = 0;
    console.log("filtroSeleccionado");
    if(this.search == '' && this.categoriaId){
      this.productosService.getProductosPorCategoria(this.categoriaId,this.pageIndex,this.pageSize,this.filtro).subscribe(data=>{
        this.productosPorCategoria = data.content;
        console.log("filtroSeleccionado");
        this.productosPorCategoriaM = data.content;
        this.length = data.totalElements;
        console.log(data);
      })
    } else if(this.categoriaId){
      this.productosService.getProductosPorCategoriaSearch(this.categoriaId,this.pageIndex,this.pageSize,this.filtro, this.search).subscribe(data=>{
        this.productosPorCategoria = data.content;
        console.log("filtroSeleccionado");
        this.productosPorCategoriaM = data.content;
        this.length = data.totalElements;
        console.log(data);
      })
    }
  }

  searchSelect(searchOutput: string){
    this.pageIndex = 0;
    this.search = searchOutput.toLowerCase();
    // this.productosBuscados = this.listaProductos.filter(producto=>
    //   producto.nombre.toLowerCase().includes(this.search));
    // this.listaProductosM = this.productosBuscados;
    console.log("searchSelect");
    if (this.categoriaId) {
      this.productosService.getProductosPorCategoriaSearch(this.categoriaId,this.pageIndex,this.pageSize,this.filtro, this.search).subscribe(data=>{
        this.productosPorCategoria = data.content;
        console.log("searchSelect");
        this.productosPorCategoriaM = data.content;
        this.length = data.totalElements;
        console.log(data);
      })
    }
  }

  paginadoEvent(paginaOutput: PageEvent){
    console.log(paginaOutput);
    this.pagina = paginaOutput;
    this.length = paginaOutput.length;
    this.pageIndex = paginaOutput.pageIndex;
    this.pageSize = paginaOutput.pageSize;
    console.log("paginadoEvent");
    if (this.search == '' && this.categoriaId) {
      this.productosService.getProductosPorCategoria(this.categoriaId,this.pageIndex,this.pageSize,this.filtro).subscribe(data=>{
        this.productosPorCategoria = data.content;
        this.productosPorCategoriaM = data.content;
        this.length = data.totalElements;
        console.log(data);
      })
    } else if (this.categoriaId){
      this.productosService.getProductosPorCategoriaSearch(this.categoriaId,this.pageIndex,this.pageSize,this.filtro,this.search).subscribe(data=>{
        this.productosPorCategoria = data.content;
        this.productosPorCategoriaM = data.content;
        this.length = data.totalElements;
        console.log(data);
      })
    }
  }

}
