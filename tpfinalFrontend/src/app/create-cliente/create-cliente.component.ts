import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent {

  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private router:Router
  ){}

  ngOnInit(): void{

  }

  onSubmitForm(){
    console.log(this.cliente);
    this.commitCliente();
  }

  commitCliente(){
    this.clienteService.createCliente(this.cliente).subscribe(
      clienteData =>{
        console.log(clienteData);
        this.redirectClienteList();
      },
      error => console.log(error));
    
  }

  redirectClienteList(){
    this.router.navigate(['/clientes'])
  }



}
