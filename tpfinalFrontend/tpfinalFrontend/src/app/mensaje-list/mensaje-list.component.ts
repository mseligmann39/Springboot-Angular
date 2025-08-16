import { Component,OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from "../mensaje.service";

@Component({
  selector: 'app-mensaje-list',
  templateUrl: './mensaje-list.component.html',
  styleUrls: ['./mensaje-list.component.css']
})
export class mensajeListComponent implements OnInit{
  mensajes!:Mensaje[]
  router: any;
  constructor(private mensajeService : MensajeService){}

  ngOnInit(): void {
    this.getMensajes();
  }

  private getMensajes(){
    this.mensajeService.findAllMensajes().subscribe(mensajeData => {this.mensajes = mensajeData});
  }

  updateMensaje(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updatemensaje', id]);
  }

  deleteMensaje(id: number){
    this.mensajeService.deleteMensaje(id).subscribe( 
      mensajeData => {
      console.log(mensajeData);
      //Volvemos a recuperar los Users tras el borrado
      this.getMensajes();
    })
  }

}
