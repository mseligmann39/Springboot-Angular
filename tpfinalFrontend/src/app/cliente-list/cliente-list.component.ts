import { Component,OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from "../cliente.service";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  clientes!:Cliente[]
  router: any;
  constructor(private clienteService : ClienteService){}

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes(){
    this.clienteService.obtenerListaDeClientes().subscribe(clienteData => {this.clientes = clienteData});
  }

  updateCliente(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updatecliente', id]);
  }

  deleteCliente(id: number){
    this.clienteService.deleteCliente(id).subscribe( 
      clienteData => {
      console.log(clienteData);
      //Volvemos a recuperar los Users tras el borrado
      this.getClientes();
    })
  }

}
