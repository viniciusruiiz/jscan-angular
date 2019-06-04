import { Api } from './../../models/api';
import { Apis } from './../../mock/api-mock';
import { Component, OnInit } from '@angular/core';
import { FiltroService } from 'src/client/app/shared/filtro.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})

export class ApiListComponent implements OnInit {

  filtro: String //campo do filtro, no html
  apis: Api[] //Api's mockadas
  filterResult: FiltroService //serviço de filtro

  constructor(private filt: FiltroService) { 
    this.apis = Apis
    this.filterResult = filt
  }

  ngOnInit() {
  }


  fillApi() {
    if (this.apis.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.apis;
    }


    return this.apis.filter(
      v => v.name.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

}
