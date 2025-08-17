import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';

@Component({
  selector: 'app-transferencia-update',
  templateUrl: './transferencia-update.component.html',
  styleUrls: ['./transferencia-update.component.css']
})
export class TransferenciaUpdateComponent {

  transferencia: Transferencia = new Transferencia();
  id!: number;

  constructor(
    private transferenciaService: TransferenciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.transferenciaService.getTransferencia(this.id).subscribe(
      transferencia => {
        this.transferencia = transferencia;
      },
      error => console.log(error)
    );
  }

  onSubmitForm() {
    this.transferenciaService.updateTransferencia(this.id, this.transferencia).subscribe(
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