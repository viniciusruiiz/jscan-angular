import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { DesenvolvedorModule } from './desenvolvedor/desenvolvedor.module';
import { EmpresaModule } from './empresa/empresa.module';
import { GestorModule } from './gestor/gestor.module';
import { PcModule } from './pc/pc.module';
import { ApiModule } from './api/api.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    ApiModule,
    DesenvolvedorModule,
    EmpresaModule,
    GestorModule,
    PcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
