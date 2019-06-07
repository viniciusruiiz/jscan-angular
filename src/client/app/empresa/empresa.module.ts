import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CompanyRoutingModule } from './empresa-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularFontAwesomeModule,
    CompanyRoutingModule
  ]
})
export class EmpresaModule { }
