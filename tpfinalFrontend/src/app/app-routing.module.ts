import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // ¡Importa el Home!
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // La ruta raíz ahora muestra el Home
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/crear', component: CreateClienteComponent },
  { path: 'actualizar-cliente/:id', component: UpdateClienteComponent },
  { path: 'gestores', loadChildren: () => import('./gestores/gestores.module').then(m => m.GestoresModule) },
  { path: 'transferencias', loadChildren: () => import('./transferencias/transferencias.module').then(m => m.TransferenciasModule) },
  { path: 'mensajes', loadChildren: () => import('./mensajes/mensajes.module').then(m => m.MensajesModule) },
  // Aquí añadiremos las rutas para gestores, transferencias, etc. más adelante
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }