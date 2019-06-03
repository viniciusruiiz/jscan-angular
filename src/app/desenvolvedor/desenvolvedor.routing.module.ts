import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesenvolvedorComponent } from './desenvolvedor.component';
import { DetalhamentoApiComponent } from './detalhamento-api/detalhamento-api.component';

const routes: Routes = [
    { 
      path: '', 
      component: DesenvolvedorComponent 
    },
    {
      path: 'api/detalhe/:id',
      component: DetalhamentoApiComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesenvolvedorRoutingModule { }
