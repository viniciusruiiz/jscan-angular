// import { PcModule } from './../pc/pc.module';
// import { ApiModule } from './../api/api.module';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestorRoutingModule } from './gestor.routing.module';
import { GestorComponent } from './gestor.component';
import { CadastrarApiComponent } from './cadastrar-api/cadastrar-api.component';
// import { IndexComponent } from './index/index.component';
// import { NavlistComponent } from './navlist/navlist.component';
// import { SidelistComponent } from './sidelist/sidelist.component';
import { CadfuncionarioComponent } from './cadfuncionario/cadfuncionario.component';
import { PcModule } from '../pc/pc.module';
import { ApiModule } from '../api/api.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GestorComponent,
    CadastrarApiComponent,
    CadfuncionarioComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    GestorRoutingModule,
    PcModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    // GestorComponent,
    // CadastrarApiComponent,
    // CadfuncionarioComponent
  ]
})
export class GestorModule { }
