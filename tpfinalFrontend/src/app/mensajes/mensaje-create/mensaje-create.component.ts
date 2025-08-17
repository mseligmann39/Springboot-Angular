import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje-create',
  templateUrl: './mensaje-create.component.html',
  styleUrls: ['./mensaje-create.component.css']
})
export class MensajeCreateComponent {

  mensaje: Mensaje = new Mensaje();

  constructor(
    private mensajeService: MensajeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.mensaje);
    this.commitMensaje();
  }

  commitMensaje() {
    this.mensajeService.createMensaje(this.mensaje).subscribe(
      mensajeData => {
        console.log(mensajeData);
        this.redirectMensajeList();
      },
      error => console.log(error)
    );
  }

  redirectMensajeList() {
    this.router.navigate(['/mensajes']);
  }
}