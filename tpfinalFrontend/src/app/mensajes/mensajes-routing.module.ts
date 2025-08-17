import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajeListComponent } from './mensaje-list/mensaje-list.component';
import { MensajeCreateComponent } from './mensaje-create/mensaje-create.component';
import { MensajeUpdateComponent } from './mensaje-update/mensaje-update.component';

const routes: Routes = [
  { path: '', component: MensajeListComponent },
  { path: 'nuevo', component: MensajeCreateComponent },
  { path: 'editar/:id', component: MensajeUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajesRoutingModule { }