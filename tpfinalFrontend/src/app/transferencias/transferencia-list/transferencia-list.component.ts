import { Component } from '@angular/core';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia-list',
  templateUrl: './transferencia-list.component.html',
  styleUrls: ['./transferencia-list.component.css']
})
export class TransferenciaListComponent {
  transferencias!: Transferencia[]; // Lista de transferencias

  constructor(private transferenciaService: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
    this.getTransferencias();
  }

  private getTransferencias() {
    this.transferenciaService.getTransferencias().subscribe(transferenciaData => {
      this.transferencias = transferenciaData;
    });
  }

  actualizarTransferencia(id: number) {
    this.router.navigate(['/transferencias/editar', id]);
  }

  eliminarTransferencia(id: number) {
    this.transferenciaService.deleteTransferencia(id).subscribe(response => {
      console.log(response);
      this.getTransferencias();
    });
  }
}