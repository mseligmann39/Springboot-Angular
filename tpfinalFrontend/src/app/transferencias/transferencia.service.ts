import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from './transferencia';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private apiUrl = `${environment.apiUrl}/transferencia`;

  constructor(private http: HttpClient) { }

  getTransferencias(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.apiUrl);
  }

  getTransferencia(id: number): Observable<Transferencia> {
    return this.http.get<Transferencia>(`${this.apiUrl}/${id}`);
  }

  createTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    return this.http.post<Transferencia>(this.apiUrl, transferencia);
  }

  updateTransferencia(id: number, transferencia: Transferencia): Observable<Transferencia> {
    return this.http.put<Transferencia>(`${this.apiUrl}/${id}`, transferencia);
  }

  deleteTransferencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTransferenciasByUser(id: number): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(`${this.apiUrl}/user/${id}`);
  }

  getTransferenciasByOrigen(id: number): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(`${this.apiUrl}/origen/${id}`);
  }

  getTransferenciasByDestino(id: number): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(`${this.apiUrl}/destino/${id}`);
  }

}