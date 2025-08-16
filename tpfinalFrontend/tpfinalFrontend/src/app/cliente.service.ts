import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private backendURL: string = "http://localhost:8080/cliente";


  constructor(
    private httpClient: HttpClient
    ) { }


  //get
  findAllClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.backendURL}`);
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.backendURL}/${id}`);
  }

  //post
  createCliente(user: Cliente): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, user);
  }

  //PUT
  updateCliente(id: number, cliente: Cliente): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, cliente);
  }

  //Delete
  deleteCliente(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
}
