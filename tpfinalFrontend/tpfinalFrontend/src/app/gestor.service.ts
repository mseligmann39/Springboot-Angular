import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Gestor } from './gestor';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  private backendURL: string = "http://localhost:8080/gestor";


  constructor(
    private httpClient: HttpClient
    ) { }


  //get
  findAllGestores(): Observable<Gestor[]>{
    return this.httpClient.get<Gestor[]>(`${this.backendURL}`);
  }

  getGestorById(id: number): Observable<Gestor>{
    return this.httpClient.get<Gestor>(`${this.backendURL}/${id}`);
  }

  //post
  createGestor(gestor: Gestor): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, gestor);
  }

  //PUT
  updateGestor(id: number, gestor: Gestor): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, gestor);
  }

  //Delete
  deleteGestor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
}
