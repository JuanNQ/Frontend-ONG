import { Component, Injectable, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { PageEvent, MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";
import { $localize } from "@angular/localize/init";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`Primera página`;
  itemsPerPageLabel = $localize`Artículos por página:`;
  lastPageLabel = $localize`Última página`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Página siguiente';
  previousPageLabel = 'Página anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Página 1 ode 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Página ${page + 1} de ${amountPages}`;
  }
}

@Component({
  selector: 'app-paginador-filtro',
  templateUrl: './paginador-filtro.component.html',
  styleUrls: ['./paginador-filtro.component.scss']
})
export class PaginadorFiltroComponent implements OnInit{

  @Input() pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5,10,20,50];
  @Input() length = 0;
  pagina:PageEvent = new PageEvent();
  listaProductos = [];
  @Output() paginadoEvent = new EventEmitter();
  categoriaId: string | null = null;

  filtros = [
    {
      nombre: 'Recomendados',
      valor: '0'
    },
    {
      nombre: 'Precio de menor a mayor',
      valor: '1'
    },
    {
      nombre: 'Precio de mayor a menor',
      valor: '2'
    }]

  filtrosSelect = new FormControl('0');
  searchSelect = new FormControl('');
  @Output() filtro = new EventEmitter();
  @Output() search = new EventEmitter();

  constructor(
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(parametros=>{
      if (this.categoriaId != parametros.get('id')) {
       if(this.filtrosSelect.value != '0') this.filtrosSelect.setValue('0');
       if(this.searchSelect.value != ''){
        this.searchSelect.setValue('');
        // this.obtenerValor();
       }
      }
      this.categoriaId = parametros.get('id');
    })

    this.filtrosSelect.valueChanges.subscribe(data=>{
      this.filtro.emit(data);
    })

    // this.searchSelect.valueChanges.subscribe(data=>{
    //   this.search.emit(data);
    // })
    // this.searchSelect.valueChanges.subscribe(data=>{
    //   console.log(data);
    //   this.search.emit(data);
    // })
  }

  obtenerValor(){
    const value = this.searchSelect.value;
    this.search.emit(value);
  }

  paginaEvento(evento: PageEvent){
    this.pagina = evento;
    this.length = evento.length;
    this.pageIndex = evento.pageIndex;
    this.pageSize = evento.pageSize;
    this.paginadoEvent.emit(this.pagina);
  }

}
