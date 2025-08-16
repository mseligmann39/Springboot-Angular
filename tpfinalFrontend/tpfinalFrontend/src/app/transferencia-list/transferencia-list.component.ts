import { Component,OnInit } from '@angular/core';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from "../transferencia.service";

@Component({
  selector: 'app-transferencia-list',
  templateUrl: './transferencia-list.component.html',
  styleUrls: ['./transferencia-list.component.css']
})
export class TransferenciaListComponent implements OnInit{
  transferencias!:Transferencia[]
  router: any;
  constructor(private transferenciaService : TransferenciaService){}

  ngOnInit(): void {
    this.getTransferencias();
  }

  private getTransferencias(){
    this.transferenciaService.findAllTransferencias().subscribe(transferenciaData => {this.transferencias = transferenciaData});
  }

  updateTransferencia(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updatetransferencia', id]);
  }

  deleteTransferencia(id: number){
    this.transferenciaService.deleteTransferencia(id).subscribe( 
      transferenciaData => {
      console.log(transferenciaData);
      //Volvemos a recuperar los Users tras el borrado
      this.getTransferencias();
    })
  }

}
