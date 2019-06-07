import { ApiModule } from './../api/api.module';
import { DevRoutingModule } from './desenvolvedor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PcModule } from '../pc/pc.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    DevRoutingModule,
    PcModule,
    ApiModule
  ],
})
export class DesenvolvedorModule { }
