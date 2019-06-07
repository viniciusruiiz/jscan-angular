import { ChartsModule } from 'ng2-charts';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiAddComponent } from './api-add/api-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApiListComponent, ApiDetailComponent, ApiAddComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule
  ],
  exports:[
    ApiListComponent, 
    ApiDetailComponent,
    ApiAddComponent
  ]
})
export class ApiModule { }
