import { FuncionarioAddComponent } from './../funcionario/funcionario-add/funcionario-add.component';
import { FuncionarioListComponent } from './../funcionario/funcionario-list/funcionario-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: "", redirectTo:"index", pathMatch:'full' },
  { path: "index", component: FuncionarioListComponent},
  { path: "add", component: FuncionarioAddComponent},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
