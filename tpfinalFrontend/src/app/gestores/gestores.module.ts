import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestoresRoutingModule } from './gestores-routing.module';
import { GestoresComponent } from './gestores.component';
import { GestorListComponent } from './gestor-list/gestor-list.component';
import { GestorCreateComponent } from './gestor-create/gestor-create.component';
import { GestorUpdateComponent } from './gestor-update/gestor-update.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    GestoresComponent,
    GestorListComponent,
    GestorCreateComponent,
    GestorUpdateComponent
  ],
  imports: [
    CommonModule,
    GestoresRoutingModule,
    FormsModule
]
})
export class GestoresModule { }
