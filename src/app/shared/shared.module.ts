import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './sideNav-bar/side-bar/side-bar.component'
import { NavBarComponent } from './sideNav-bar/nav-bar/nav-bar.component';
import { GestorModule } from '../gestor/gestor.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    GestorModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule
    
  ],
  exports: [
    SideBarComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
