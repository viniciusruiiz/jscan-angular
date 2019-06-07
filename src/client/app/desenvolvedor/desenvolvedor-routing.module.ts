import { PcDetailComponent } from './../pc/pc-detail/pc-detail.component';
import { ApiListComponent } from './../api/api-list/api-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: "", redirectTo:"index", pathMatch:'full' },
  { path: "index", component: PcDetailComponent},
  { path: "apilist", component: ApiListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
