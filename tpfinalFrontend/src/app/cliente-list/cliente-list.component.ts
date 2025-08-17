import { Component,OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from "../cliente.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  clientes!:Cliente[]
  // Inyecta el servicio y el router
  // El router es el que permite navegar entre componentes
  // y el servicio es el que permite comunicarse con el backend
  // a través de HTTP
  // El servicio es el que se comunica con el backend a través de HTTP
  constructor(private clienteService : ClienteService,private router:Router){}

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes(){
    this.clienteService.obtenerListaDeClientes().subscribe(clienteData => {this.clientes = clienteData});
  }

  updateCliente(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['actualizar-cliente/:' + id]); 
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
