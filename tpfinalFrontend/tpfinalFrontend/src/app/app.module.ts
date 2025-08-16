import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { GestorListComponent } from './gestor-list/gestor-list.component';
import { CreateGestorComponent } from './create-gestor/create-gestor.component';

import { mensajeListComponent } from './mensaje-list/mensaje-list.component';
import { CreateMensajeComponent } from './create-mensaje/create-mensaje.component';
import { TransferenciaListComponent } from './transferencia-list/transferencia-list.component';
import { CreateTransferenciaComponent } from './create-transferencia/create-transferencia.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    CreateClienteComponent,
    GestorListComponent,
    CreateGestorComponent,
    mensajeListComponent,
    CreateMensajeComponent,
    TransferenciaListComponent,
    CreateTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
