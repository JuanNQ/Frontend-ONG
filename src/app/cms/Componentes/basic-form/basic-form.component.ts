import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit{

  // nombreForm = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  // edadForm = new FormControl('');
  // fechaForm = new FormControl(new Date());
  // telefonoForm = new FormControl('');
  // correoForm = new FormControl('');
  // colorForm = new FormControl('#000000');

  // categoriaForm = new FormControl('');
  // categoriaFormM = new FormControl('');

  // radioForm = new FormControl('');
  // radioooForm = new FormControl('');
  // checkbokForm = new FormControl(false);

  form: FormGroup = new FormGroup('');

  // form = new FormGroup({
  //   nombre: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  //   correo: new FormControl(''),
  //   telefono: new FormControl(''),
  //   color: new FormControl('#000000'),
  //   fecha: new FormControl(''),
  //   edad: new FormControl(12),
  //   categoria: new FormControl(''),
  //   categoriaM: new FormControl(''),
  //   checkbok: new FormControl(false),
  //   radio: new FormControl(''),
  //   radiooo: new FormControl(''),
  // });

  constructor(
    private formBuilder:FormBuilder
  ){
    this.buildForm();
  }

  ngOnInit(): void {
      this.nombreForm?.valueChanges.subscribe(valor=>{
        console.log(valor);

      })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      fullName : this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(8)]],
      last: ['', [Validators.required, Validators.maxLength(8)]],
      }),
      edad : ['',[Validators.required,Validators.min(18),Validators.max(100)]],
      fecha : [new Date()],
      telefono : [''],
      correo : ['',[Validators.required,Validators.email]],
      color : ['#000000'],
      categoria : [''],
      categoriaM : [''],
      radio : [''],
      radiooo : [''],
      checkbok : [false],
    });
  }

  save(event: Event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get nombreForm() {
    return this.form.get('fullName.nombre');
  }

  get lastForm() {
    return this.form.get('fullName.last');
  }

  get correoForm() {
    return this.form.get('correo');
  }

  get telefonoForm() {
    return this.form.get('telefono');
  }

  get colorForm() {
    return this.form.get('color');
  }

  get fechaForm() {
    return this.form.get('fecha');
  }

  get edadForm() {
    return this.form.get('edad');
  }

  get categoriaForm() {
    return this.form.get('categoria');
  }

  get categoriaMForm() {
    return this.form.get('categoriaM');
  }

  get radioForm() {
    return this.form.get('radio');
  }

  get radioooForm() {
    return this.form.get('radiooo');
  }

  get checkbokForm() {
    return this.form.get('checkbok');
  }

  // nombre = new FormControl('', [Validators.maxLength(10),Validators.required]);
  // apellido = new FormControl('');
  // radio = new FormControl('',Validators.required);
  // radio2 = new FormControl('',Validators.required);
  // checkbok = new FormControl(false,Validators.required);
  // categoria = new FormControl('',Validators.required);
  // categoria2 = new FormControl('',Validators.required);

  // form = new FormGroup({
  //   nombre : new FormControl('', [Validators.maxLength(10),Validators.required]),
  //   // apellido : new FormControl(''),
  //   // radio : new FormControl('',Validators.required),
  //   // radio2 : new FormControl('',Validators.required),
  //   // checkbok : new FormControl(false,Validators.required),
  //   // categoria : new FormControl('',Validators.required),
  //   // categoria2 : new FormControl('',Validators.required),
  // });

  // form: FormGroup = new FormGroup('');

  // constructor(
  //   private formBuilder:FormBuilder
  // ){
  //   this.builderForm();
  // }

  // ngOnInit(): void {
  //     this.nombreForm?.valueChanges.subscribe((data:any)=>{
  //       console.log(data);
  //     })
  // }

  // get nombreForm(){
  //   return this.form.get('nombre');
  // }

  // enviar(){
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   } else{
  //     this.form.markAllAsTouched();
  //   }

  // }

  // private builderForm(){
  //   this.form = this.formBuilder.group({
  //     nombre : ['', [Validators.maxLength(10),Validators.required]],
  //     // apellido : [''],
  //     // radio : ['',Validators.required],
  //     // radio2 : ['',Validators.required],
  //     // checkbok : [false,Validators.required],
  //     // categoria : ['',Validators.required],
  //     // categoria2 : ['',Validators.required],
  //   });
  // }

}
