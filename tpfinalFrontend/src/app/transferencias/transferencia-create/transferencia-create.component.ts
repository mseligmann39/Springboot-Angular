import { Component } from '@angular/core';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia-create',
  templateUrl: './transferencia-create.component.html',
  styleUrls: ['./transferencia-create.component.css']
})
export class TransferenciaCreateComponent {

  transferencia: Transferencia = new Transferencia();

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.transferencia);
    this.commitTransferencia();
  }

  commitTransferencia() {
    this.transferenciaService.createTransferencia(this.transferencia).subscribe(
      transferenciaData => {
        console.log(transferenciaData);
        this.redirectTransferenciaList();
      },
      error => console.log(error)
    );
  }

  redirectTransferenciaList() {
    this.router.navigate(['/transferencias']);
  }
}