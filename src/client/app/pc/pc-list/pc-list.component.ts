import { FiltroService } from '../../shared/services/filtro.service';
import { Pc } from '../../shared/models/pc';
import { Component, OnInit } from '@angular/core';
import { Pcs } from '../../shared/mock/pc-mock'

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {

  public pcs : Pc[];
  filtro: String
  filterResult: FiltroService //serviço de filtro
  
  constructor(private filt: FiltroService) { 
    this.pcs = Pcs;
    this.filterResult = filt;
  }

  ngOnInit() {

  }

  fillApi() {
    if (this.pcs.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.pcs;
    }


    return this.pcs.filter(
      p => p.name.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }
}
