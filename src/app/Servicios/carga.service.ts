import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  private estadoCarga : boolean = false;

  constructor() { }


  setEstadoCarga(estado:boolean){
    this.estadoCarga = estado;
  }

  getEstadoCarga(){
    return this.estadoCarga;
  }

}
