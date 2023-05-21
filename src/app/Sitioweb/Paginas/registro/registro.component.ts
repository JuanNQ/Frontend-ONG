import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsuariosService } from "src/app/Servicios/usuarios.service";
import { Router } from "@angular/router";

import { OnExit } from "../../../Guardianes/exit.guard";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnExit {

  hide = true;
  form: FormGroup = new FormGroup('');

  constructor(
    private formBuilder:FormBuilder,
    private usuariosService:UsuariosService,
    private router:Router
  ){
    this.buildForm();
  }

  onExit(){
    if (this.form.invalid) {
      const rpta = confirm("Estas seguro de salir?");
      return rpta;
    }
    return true;
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      usuario: ['',[Validators.required]],
      correo: ['',[Validators.required,Validators.email]],
      contrasenia: ['', [Validators.required]]
    })
  }

  get usuarioForm(){
    return this.form.get('usuario');
  }

  get correoForm(){
    return this.form.get('correo');
  }

  get contraseniaForm(){
    return this.form.get('contrasenia');
  }

  registrar(){
    if (this.form.valid) {
      this.usuariosService.crearUsuario({nombre: this.usuarioForm?.value,contrasenia: this.contraseniaForm?.value}).subscribe(data=>{
        this.router.navigate(["/InicioSesion"])
      })
    } else {
      this.form.markAllAsTouched();
    }

  }


}
