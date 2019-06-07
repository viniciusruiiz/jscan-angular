import { Funcionario } from './../../models/funcionario';
import { Funcionarios } from './../../mock/funcionario-mock';
import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../../shared/filtro.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public funcionarios: Funcionario[]
  filtro: String
  filterResult: FiltroService
  
  constructor(private filt: FiltroService) { 
    this.funcionarios = Funcionarios;
    this.filterResult = filt;
  }

  ngOnInit() {  }
}
