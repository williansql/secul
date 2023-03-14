import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroEditaisRoutingModule } from './cadastro-editais-routing.module';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';


@NgModule({
  declarations: [
    FormularioCadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroEditaisRoutingModule
  ]
})
export class CadastroEditaisModule { }
