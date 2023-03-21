import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroEditaisRoutingModule } from './cadastro-editais-routing.module';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioCadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroEditaisRoutingModule,
    ReactiveFormsModule
  ]
})
export class CadastroEditaisModule { }
