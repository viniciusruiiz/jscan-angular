import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';

const empresaRoutes: Routes = [
  // { 
    // path: '', 
    // component: CadastrarFuncionarioComponent
    //mudar para o index da empresa
  // },
  {
    path: '',
    redirectTo: 'lista-funcionarios'
  },
  {
    path: 'lista-funcionarios',
    component: ListaFuncionariosComponent
  },
  {
    path: 'cadastro-funcionario',
    component: CadastrarFuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(empresaRoutes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
