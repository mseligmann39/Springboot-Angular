import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferenciaListComponent } from './transferencia-list/transferencia-list.component';
import { TransferenciaCreateComponent } from './transferencia-create/transferencia-create.component';
import { TransferenciaUpdateComponent } from './transferencia-update/transferencia-update.component';

const routes: Routes = [
  { path: '', component: TransferenciaListComponent },
  { path: 'nuevo', component: TransferenciaCreateComponent },
  { path: 'editar/:id', component: TransferenciaUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferenciasRoutingModule { }