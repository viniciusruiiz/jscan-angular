import { PcModule } from './../pc/pc.module';
import { ApiModule } from './../api/api.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NavlistComponent } from './navlist/navlist.component';
import { SidelistComponent } from './sidelist/sidelist.component';
import { CadfuncionarioComponent } from './cadfuncionario/cadfuncionario.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IndexComponent, NavlistComponent, SidelistComponent, CadfuncionarioComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ApiModule,
    PcModule,
    RouterModule
  ],
  exports:[
    SidelistComponent, 
    NavlistComponent, 
    IndexComponent
  ]
})
export class GestorModule { }
