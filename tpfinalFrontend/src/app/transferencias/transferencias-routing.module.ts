import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferenciasComponent } from './transferencias.component';

const routes: Routes = [{ path: '', component: TransferenciasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferenciasRoutingModule { }
