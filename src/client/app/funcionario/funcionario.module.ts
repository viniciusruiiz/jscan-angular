import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioDetailComponent } from './funcionario-detail/funcionario-detail.component';
import { FuncionarioAddComponent } from './funcionario-add/funcionario-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FuncionarioListComponent, FuncionarioDetailComponent, FuncionarioAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FuncionarioModule { }
