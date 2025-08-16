import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-mensaje',
  templateUrl: './create-mensaje.component.html',
  styleUrls: ['./create-mensaje.component.css']
})
export class CreateMensajeComponent {

  mensaje: Mensaje = new Mensaje();

  constructor(
    private mensajeService: MensajeService,
    private router:Router
  ){}

  ngOnInit(): void{

  }

  onSubmitForm(){
    console.log(this.mensaje);
    this.commitMensaje();
  }

  commitMensaje(){
    this.mensajeService.createMensaje(this.mensaje).subscribe(
      mensajeData =>{
        console.log(mensajeData);
        this.redirectMensajeList();
      },
      error => console.log(error));
    
  }

  redirectMensajeList(){
    this.router.navigate(['/mensajeList'])
  }



}
