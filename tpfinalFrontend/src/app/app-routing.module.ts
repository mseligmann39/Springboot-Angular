// app-routing.module.ts corregido (ejemplo para Clientes)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
// ¡Ojo! Veo que no tienes un componente para actualizar, lo ideal sería tenerlo.
// Por ahora, reutilizaremos el de crear.

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/nuevo', component: CreateClienteComponent },
  // Añado una ruta para la edición que también usa el formulario de creación.
  // El ':id' es un parámetro que le pasaremos.
  { path: 'clientes/editar/:id', component: CreateClienteComponent }, 
  // Una ruta por defecto para que la app no empiece en blanco.
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }