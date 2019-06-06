import { PcModule } from './../pc/pc.module';
import { ApiModule } from './../api/api.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
//import { RouterModule } from '@angular/router';
import { ManagerRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ManagerRoutingModule,
    ApiModule,
    PcModule,
  ],
  exports:[
    //SidelistComponent, 
    //NavlistComponent, 
    //IndexComponent
  ]
})
export class GestorModule { }
