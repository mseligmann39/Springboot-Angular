import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-mensaje-update',
  templateUrl: './mensaje-update.component.html',
  styleUrls: ['./mensaje-update.component.css']
})
export class MensajeUpdateComponent {

  mensaje: Mensaje = new Mensaje();
  id!: number;

  constructor(
    private mensajeService: MensajeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.mensajeService.getMensaje(this.id).subscribe(
      mensaje => {
        this.mensaje = mensaje;
      },
      error => console.log(error)
    );
  }

  onSubmitForm() {
    this.mensajeService.updateMensaje(this.id, this.mensaje).subscribe(
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
