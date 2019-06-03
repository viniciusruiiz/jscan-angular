import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesenvolvedorRoutingModule } from './desenvolvedor.routing.module';
import { ApisCadastradasComponent } from './apis-cadastradas/apis-cadastradas.component';
import { DetalhamentoApiComponent } from './detalhamento-api/detalhamento-api.component';
import { DesenvolvedorComponent } from './desenvolvedor.component';
import { ApiModule } from '../api/api.module';
import { PcModule } from '../pc/pc.module'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ApisCadastradasComponent,
    DesenvolvedorComponent,
    DetalhamentoApiComponent
  ],
  imports: [
    CommonModule,
    DesenvolvedorRoutingModule,
    ApiModule,
    PcModule,
    ChartsModule
  ]
})
export class DesenvolvedorModule { }

