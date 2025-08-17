import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestorListComponent } from './gestor-list/gestor-list.component';
import { GestorCreateComponent } from './gestor-create/gestor-create.component';
import { GestorUpdateComponent } from './gestor-update/gestor-update.component';

const routes: Routes = [
  { path: '', component: GestorListComponent }, // La ruta 'gestores' muestra la lista
  { path: 'nuevo', component: GestorCreateComponent }, // La ruta 'gestores/nuevo'
  { path: 'editar/:id', component: GestorUpdateComponent } // La ruta 'gestores/editar/123'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestoresRoutingModule { }