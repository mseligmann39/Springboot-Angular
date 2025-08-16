import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Transferencia } from './transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private backendURL: string = "http://localhost:8080/transferencia";


  constructor(
    private httpClient: HttpClient
    ) { }


  //get
  findAllTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(`${this.backendURL}`);
  }

  getTransferenciaById(id: number): Observable<Transferencia>{
    return this.httpClient.get<Transferencia>(`${this.backendURL}/${id}`);
  }

  //post
  createTransferencia(transferencia: Transferencia): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, transferencia);
  }

  //PUT
  updateTransferencia(id: number, transferencia: Transferencia): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, transferencia);
  }

  //Delete
  deleteTransferencia(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
}
