import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EmpresaRoutingModule } from './empresa.routing.module';
import { PcModule } from '../pc/pc.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastrarFuncionarioComponent,
    ListaFuncionariosComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    EmpresaRoutingModule,
    PcModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    // GestorComponent,
    // CadastrarApiComponent,
    // CadfuncionarioComponent
  ]
})
export class EmpresaModule { }
