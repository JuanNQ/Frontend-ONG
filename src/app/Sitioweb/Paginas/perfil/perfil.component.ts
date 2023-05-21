import { Component, OnInit, OnDestroy } from '@angular/core';
import { TokenService } from "../../../Servicios/token.service";
import { AuthService } from "../../../Servicios/auth.service";
import { usuario } from "../../../Interfaces/usuario";
import { interval, Subscription } from "rxjs";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: usuario | null = null;
  subscription: Subscription = new Subscription();


  constructor(
    private authService:AuthService
  ){}

  ngOnInit(): void {
    // this.subscription = interval(500).subscribe(()=>{
    //   this.authService.$user.subscribe(data=>{
    //     this.usuario = data;
    //   })
    // })

    this.authService.$user.subscribe(data=>{
      this.usuario = data;
    })

    // this.authService.perfil().subscribe(data=>{
    //   this.usuario = data;
    // })
  }

  // ngOnDestroy(): void {
  //     this.subscription.unsubscribe();
  // }



}
