import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { checkToken } from '../Interceptors/token.interceptor';
import { switchMap } from 'rxjs';
import { listarProductosTotalesDto } from "../Interfaces/producto";
import { CategoriaDto } from "../Interfaces/categoria";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlProductos: string = `${environment.API_URL_PRODUCTOS}/v1/productos`;
  private urlCategorias: string = `${environment.API_URL_PRODUCTOS}/v1/categorias`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ` + btoa('administrador:administrador')
    })
  };


  constructor(
    private http: HttpClient
  ) { }

  public getListaProductos(): Observable<any>{
    // return this.http.get("https://fakestoreapi.com/products");
    return this.http.get<any>(`${this.urlProductos}/listarProductos`, {headers: this.httpOptions.headers});
  }
  public getListaProductosListados(size: number, page:number){
    // return this.http.get("https://fakestoreapi.com/products");
    let params = new HttpParams();
    // if (size && page) {
      params = params.set('size', size);
      params = params.set('page', page);
    // }

    return this.http.get<any>(`${this.urlProductos}/listarProductosPaginados`, { headers: this.httpOptions.headers, params: params });//, context:checkToken()
  }

  public getProducto(id: string): Observable<any>{
    // return this.http.get("https://fakestoreapi.com/products");
    return this.http.get<listarProductosTotalesDto>(`${this.urlProductos}/${id}`, {headers: this.httpOptions.headers});
  }

  public getProductosPorCategoria(id: string, page: number, size: number){
    let params = new HttpParams();
    params = params.set('page',page);
    params = params.set('size',size);
    return this.http.get<any>(`${this.urlProductos}/${id}/productos`, {headers: this.httpOptions.headers, params:params});
  }

  public getTraerCategorias(){
    return this.http.get<CategoriaDto>(`${this.urlCategorias}/traerCategorias`,{headers:this.httpOptions.headers});
  }
}
