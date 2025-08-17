import { Injectable } from '@angular/core';
import { Gestor } from './gestor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  // Construimos la URL base específica para los clientes
  private apiUrl = `${environment.apiUrl}/gestor`;

  constructor(private http: HttpClient) { }


  getGestores(): Observable<Gestor[]> {
    return this.http.get<Gestor[]>(this.apiUrl);
  }

  getGestor(id: number): Observable<Gestor> {
    return this.http.get<Gestor>(`${this.apiUrl}/${id}`);
  }

  createGestor(gestor: Gestor): Observable<Gestor> {
    return this.http.post<Gestor>(this.apiUrl, gestor);
  }

  updateGestor(id: number, gestor: Gestor): Observable<Gestor> {
    return this.http.put<Gestor>(`${this.apiUrl}/${id}`, gestor);
  }

  deleteGestor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
