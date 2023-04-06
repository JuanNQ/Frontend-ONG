import { Component } from '@angular/core';

import { OnExit } from "../../../Guardianes/exit.guard";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnExit {

  onExit(){
    const rpta = confirm("Logica desde componenete, estas seguro de salir?");
    return rpta;
  }

}
