import { ApiDetailComponent } from './api/api-detail/api-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'manager',
    loadChildren: './gestor/gestor.module#GestorModule'
  },
  {
    path: 'dev',
    loadChildren: './desenvolvedor/desenvolvedor.module#DesenvolvedorModule'
  },
  {
    path: 'company',
    loadChildren: './empresa/empresa.module#EmpresaModule'
  },
  {
    path: 'apidetail/:apiId',
    component: ApiDetailComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
