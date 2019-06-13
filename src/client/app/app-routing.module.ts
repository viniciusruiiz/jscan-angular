import { ApiDetailComponent } from './api/api-detail/api-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GestorGuard } from './shared/Guards/gestor.guard';
import { DevGuard } from './shared/Guards/dev.guard';
import { EmpresaGuard } from './shared/Guards/empresa.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'manager',
    loadChildren: './gestor/gestor.module#GestorModule',
    canLoad: [GestorGuard],
    canActivate: [GestorGuard],
    canActivateChild: [GestorGuard] 
  },
  {
    path: 'dev',
    loadChildren: './desenvolvedor/desenvolvedor.module#DesenvolvedorModule',
    canLoad: [DevGuard],
    canActivate: [DevGuard],
    canActivateChild: [DevGuard]
  },
  {
    path: 'company',
    loadChildren: './empresa/empresa.module#EmpresaModule',
    canLoad: [EmpresaGuard],
    canActivate: [EmpresaGuard],
    canActivateChild: [EmpresaGuard]
  },
  {
    //seria ideal colocar essa rota no componente de gestor e funcionario
    path: 'apidetail/:apiId',
    component: ApiDetailComponent,
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
