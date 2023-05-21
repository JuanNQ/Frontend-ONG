import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/Servicios/auth.service";
import { Router } from "@angular/router";
import { usuario } from "src/app/Interfaces/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hide = true;

  form: FormGroup = new FormGroup('');
  usuario: usuario | null = null;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
  ){
    this.buildForm();
  }

  ngOnInit(): void {
      this.authService.$user.subscribe(data=>{
        this.usuario = data;
      })
  }

  ingresar(){
    if (this.form.valid) {
      this.authService.loginAndPerfil(this.usuarioForm?.value,this.contraseniaForm?.value).subscribe(data=>{
        this.router.navigate(['/Inicio']);
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contrasenia: ['',[Validators.required]]
    })
  }

  get usuarioForm(){
    return this.form.get('usuario');
  }

  get contraseniaForm(){
    return this.form.get('contrasenia');
  }

  // mensajeError(){
  //   if (this.usuarioForm?.hasError('required')) {
  //     return 'Este campo es requerido';
  //   }
  //   return this.usuarioForm?.hasError('email')?'Por favor ingresa un usuario válido':'';
  // }
}
