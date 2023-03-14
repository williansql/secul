import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro-editais' },
  {
    path: 'cadastro-editais',
    loadChildren: () =>
      import('./cadastro-editais/cadastro-editais.module').then((m) => m.CadastroEditaisModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
