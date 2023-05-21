import { Component, ViewEncapsulation } from '@angular/core';
import { CargaService } from "src/app/Servicios/carga.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {

  constructor(
    public cargaService:CargaService
  ){}

}
