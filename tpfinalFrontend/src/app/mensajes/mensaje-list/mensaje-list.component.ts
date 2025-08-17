import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje-list',
  templateUrl: './mensaje-list.component.html',
  styleUrls: ['./mensaje-list.component.css']
})
export class MensajeListComponent {
  mensajes!: Mensaje[]; // Lista de mensajes

  constructor(private mensajeService: MensajeService, private router: Router) { }

  ngOnInit(): void {
    this.getMensajes();
  }

  private getMensajes() {
    this.mensajeService.getMensajes().subscribe(mensajeData => {
      this.mensajes = mensajeData;
    });
  }

  actualizarMensaje(id: number) {
    this.router.navigate(['/mensajes/editar', id]);
  }

  eliminarMensaje(id: number) {
    this.mensajeService.deleteMensaje(id).subscribe(response => {
      console.log(response);
      this.getMensajes();
    });
  }
}
