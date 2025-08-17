import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  id!: number;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Recogemos el ID que nos llega en la url desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    //Utilizamos el método de UserService para obtener usuario
    this.clienteService.getClienteById(this.id).subscribe(
      cliente => {
        this.cliente = cliente;
      }, 
      error => console.log(error));
  }

  //Metodo referenciado por el forumulario HTML
  onSubmitForm(){
    this.clienteService.updateCliente(this.id, this.cliente).subscribe( 
      clienteData =>{
        console.log(clienteData);
        this.redirectClienteList();
      }, 
      error => console.log(error));
  }

  //Redirección a lista de usuarios
  redirectClienteList(){
    this.router.navigate(['/clientes']);
  }
}