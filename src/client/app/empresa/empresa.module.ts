import { FuncionarioModule } from './../funcionario/funcionario.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './empresa-routing.module';

@NgModule({
  //declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularFontAwesomeModule,
    CompanyRoutingModule,
    FuncionarioModule
  ]
})
export class EmpresaModule { }
