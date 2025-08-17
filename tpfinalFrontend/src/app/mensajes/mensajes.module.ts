import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MensajesRoutingModule } from './mensajes-routing.module';
import { MensajesComponent } from './mensajes.component';
import { MensajeListComponent } from './mensaje-list/mensaje-list.component';
import { MensajeCreateComponent } from './mensaje-create/mensaje-create.component';
import { MensajeUpdateComponent } from './mensaje-update/mensaje-update.component';



@NgModule({
  declarations: [
    MensajesComponent,
    MensajeListComponent,
    MensajeCreateComponent,
    MensajeUpdateComponent
  ],
  imports: [
    CommonModule,
    MensajesRoutingModule,
    FormsModule
  ]
})
export class MensajesModule { }
