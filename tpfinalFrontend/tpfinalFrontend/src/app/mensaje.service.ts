import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private backendURL: string = "http://localhost:8080/mensaje";


  constructor(
    private httpClient: HttpClient
    ) { }


  //get
  findAllMensajes(): Observable<Mensaje[]>{
    return this.httpClient.get<Mensaje[]>(`${this.backendURL}`);
  }

  getMensajeById(id: number): Observable<Mensaje>{
    return this.httpClient.get<Mensaje>(`${this.backendURL}/${id}`);
  }

  //post
  createMensaje(mensaje: Mensaje): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, mensaje);
  }

  //PUT
  updateMensaje(id: number, mensaje: Mensaje): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, mensaje);
  }

  //Delete
  deleteMensaje(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
}
