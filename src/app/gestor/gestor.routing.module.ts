import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadfuncionarioComponent } from './cadfuncionario/cadfuncionario.component';
import { PcDetailComponent } from '../pc/pc-detail/pc-detail.component';
import { GestorComponent } from './gestor.component';
import { CadastrarApiComponent } from './cadastrar-api/cadastrar-api.component';
import { ApiDetailComponent } from '../api/api-detail/api-detail.component';

const gestRoutes: Routes = [
  { 
    path: '', 
    component: GestorComponent
  },
  {
    path: 'cadastro-funcionario',
    component: CadfuncionarioComponent
  },
  {
    path: 'detalhe/:id',
    component: PcDetailComponent
  },
  {
    path: 'cadastro-api',
    component: CadastrarApiComponent
  },
  {
    path: 'api/detalhe/:id',
    component: ApiDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(gestRoutes)],
  exports: [RouterModule]
})
export class GestorRoutingModule { }
