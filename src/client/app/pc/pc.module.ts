import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcDetailComponent } from './pc-detail/pc-detail.component';
import { PcListComponent } from './pc-list/pc-list.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PcDetailComponent, PcListComponent],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  exports:[
    PcDetailComponent,
    PcListComponent
  ]
})
export class PcModule { }
