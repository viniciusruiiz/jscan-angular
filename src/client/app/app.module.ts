import { HttpClientModule } from '@angular/common/http';
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
import { PcModule } from './pc/pc.module';
import { ApiModule } from './api/api.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    ApiModule,
    DesenvolvedorModule,
    EmpresaModule,
    PcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
