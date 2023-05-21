import { Component, Injectable, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { PageEvent, MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";
import { $localize } from "@angular/localize/init";

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

  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5,10,20,50];
  @Input() length = 0;
  pagina:PageEvent = new PageEvent();
  listaProductos = [];
  @Output() paginadoEvent = new EventEmitter();

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
  @Output() filtro = new EventEmitter();

  ngOnInit(): void {
    this.filtrosSelect.valueChanges.subscribe(data=>{
      this.filtro.emit(data);
    })
  }

  paginaEvento(evento: PageEvent){
    this.pagina = evento;
    this.length = evento.length;
    this.pageIndex = evento.pageIndex;
    this.pageSize = evento.pageSize;
    this.paginadoEvent.emit(this.pagina);
  }

}
