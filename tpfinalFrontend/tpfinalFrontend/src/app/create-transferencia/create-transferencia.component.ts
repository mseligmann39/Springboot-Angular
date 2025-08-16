import { Component } from '@angular/core';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transferencia',
  templateUrl: './create-transferencia.component.html',
  styleUrls: ['./create-transferencia.component.css']
})
export class CreateTransferenciaComponent {

  transferencia: Transferencia = new Transferencia();

  constructor(
    private transferenciaService: TransferenciaService,
    private router:Router
  ){}

  ngOnInit(): void{

  }

  onSubmitForm(){
    console.log(this.transferencia);
    this.commitTransferencia();
  }

  commitTransferencia(){
    this.transferenciaService.createTransferencia(this.transferencia).subscribe(
      transferenciaData =>{
        console.log(transferenciaData);
        this.redirectTransferenciaList();
      },
      error => console.log(error));
    
  }

  redirectTransferenciaList(){
    this.router.navigate(['/transferenciaList'])
  }



}
