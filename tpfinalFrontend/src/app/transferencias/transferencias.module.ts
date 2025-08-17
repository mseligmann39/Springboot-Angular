import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciasRoutingModule } from './transferencias-routing.module';
import { TransferenciasComponent } from './transferencias.component';
import { TransferenciaListComponent } from './transferencia-list/transferencia-list.component';
import { TransferenciaCreateComponent } from './transferencia-create/transferencia-create.component';
import { TransferenciaUpdateComponent } from './transferencia-update/transferencia-update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransferenciasComponent,
    TransferenciaListComponent,
    TransferenciaCreateComponent,
    TransferenciaUpdateComponent
  ],
  imports: [
    CommonModule,
    TransferenciasRoutingModule,
    FormsModule
  ]
})
export class TransferenciasModule { }
