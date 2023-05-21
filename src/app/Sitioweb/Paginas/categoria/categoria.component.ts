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
  size = 10;
  page = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5,10,20,50];
  length = 0;
  pagina:PageEvent | null = null;
  filtro: number = 0;

  constructor(
    private productosService:ProductosService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {

      this.route.paramMap.pipe(
        switchMap(parametros=>{
          // this.categoriaId == parametros.get('id')?this.filtro:this.filtro=0;
          this.categoriaId = parametros.get('id')
          if (this.categoriaId) {
            return this.productosService.getProductosPorCategoria(this.categoriaId,this.pageIndex,this.pageSize,this.filtro);
          }
          return [];
        })
      )
      .subscribe(data=>{
        console.log(data);
        this.productosPorCategoria = data.content;
        this.length = data.totalElements;
        // this.page += 1;
      })

      this.route.queryParamMap.subscribe(parametros=>{
        this.productoId = parametros.get('producto')
      })

  }

  // paginaSiguiente(){
  //   if (this.categoriaId) {
  //     this.productosService.getProductosPorCategoria(this.categoriaId,this.page,this.size).subscribe(data=>{
  //       this.productosPorCategoria = this.productosPorCategoria.concat(data.content);
  //       console.log(data);
  //       })
  //   }
  // }

  filtroSeleccionado(filtroOutput: number){
    this.filtro = filtroOutput;
    if (this.categoriaId) {
    this.productosService.getProductosPorCategoria(this.categoriaId,this.pageIndex,this.pageSize,this.filtro).subscribe(data=>{
      this.productosPorCategoria = data.content;
      this.length = data.totalElements;
      console.log(data);
    })}
  }

  paginadoEvent(paginaOutput: PageEvent){
    console.log(paginaOutput);
    this.pagina = paginaOutput;
    this.length = paginaOutput.length;
    this.pageIndex = paginaOutput.pageIndex;
    this.pageSize = paginaOutput.pageSize;
    if (this.categoriaId) {
    this.productosService.getProductosPorCategoria(this.categoriaId,this.pageIndex,this.pageSize,this.filtro).subscribe(data=>{
      this.productosPorCategoria = data.content;
      this.length = data.totalElements;
      console.log(data);
    })}
  }

}
