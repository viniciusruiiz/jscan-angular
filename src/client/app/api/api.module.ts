import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { FormsModule } from '@angular/forms';
import { ApiAddComponent } from './api-add/api-add.component';

@NgModule({
  declarations: [ApiListComponent, ApiDetailComponent, ApiAddComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  exports:[
    ApiListComponent, 
    ApiDetailComponent,
    ApiAddComponent
  ]
})
export class ApiModule { }
