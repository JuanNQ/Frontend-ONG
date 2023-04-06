import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../Servicios/productos.service';
import { ActivatedRoute } from "@angular/router";
import { pipe, switchMap } from "rxjs";

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

  constructor(
    private productosService:ProductosService,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {

      this.route.paramMap.pipe(
        switchMap(parametros=>{
          this.categoriaId == parametros.get('id')?this.page:this.page=0;
          this.categoriaId = parametros.get('id')
          if (this.categoriaId) {
            return this.productosService.getProductosPorCategoria(this.categoriaId,0,10);
          }
          return [];
        })
      )
      .subscribe(data=>{
        console.log(data);
        this.productosPorCategoria = data.content;
        this.page += 1;
      })

      this.route.queryParamMap.subscribe(parametros=>{
        this.productoId = parametros.get('producto')
      })

  }

  paginaSiguiente(){
    if (this.categoriaId) {
      this.productosService.getProductosPorCategoria(this.categoriaId,this.page,this.size).subscribe(data=>{
        this.productosPorCategoria = this.productosPorCategoria.concat(data.content);
        this.page += 1;
        console.log(data);
        })
    }
  }

}
