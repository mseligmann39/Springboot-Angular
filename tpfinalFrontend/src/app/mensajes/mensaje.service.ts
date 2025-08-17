import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { environment } from '../../enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {

    private apiUrl = `${environment.apiUrl}/mensaje`;

  constructor(private http: HttpClient) { }

  getMensajes(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.apiUrl);
  }

  getMensaje(id: number): Observable<Mensaje> {
    return this.http.get<Mensaje>(`${this.apiUrl}/${id}`);
  }

  createMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(this.apiUrl, mensaje);
  }

  updateMensaje(id: number, mensaje: Mensaje): Observable<Mensaje> {
    return this.http.put<Mensaje>(`${this.apiUrl}/${id}`, mensaje);
  }

  deleteMensaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMensajesByUser(id: number): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.apiUrl}/user/${id}`);
  }

  getMensajesByOrigen(id: number): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.apiUrl}/origen/${id}`);
  }
  getMensajesByDestino(id: number): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.apiUrl}/destino/${id}`);
  }
  
}
