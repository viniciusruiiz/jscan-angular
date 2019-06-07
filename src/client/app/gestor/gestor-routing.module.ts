import { ApiDetailComponent } from './../api/api-detail/api-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcDetailComponent } from '../pc/pc-detail/pc-detail.component';
import { ApiAddComponent } from '../api/api-add/api-add.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  //{ path: "", redirectTo:"manager", pathMatch:'full' },
  //{ path: "manager", component: IndexComponent },
  { path: "index", component: IndexComponent},
  { path: 'detalhe/:pcId', component: PcDetailComponent },
  { path: 'addapi', component: ApiAddComponent },
  //{ path: 'gestor', loadChildren: 'src\app\gestor\gestor.module#GestorModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
