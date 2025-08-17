import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente'; 
import { environment } from '../enviroments/enviroment'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Construimos la URL base específica para los clientes
  private apiUrl = `${environment.apiUrl}/cliente`;

  constructor(private http: HttpClient) { }

  //get
  obtenerListaDeClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  //post
  createCliente(user: Cliente): Observable<Object>{
    return this.http.post(`${this.apiUrl}`, user);
  }

  //PUT
  updateCliente(id: number, cliente: Cliente): Observable<Object>{
    return this.http.put(`${this.apiUrl}/${id}`, cliente);
  }

  //Delete
  deleteCliente(id: number): Observable<Object>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
