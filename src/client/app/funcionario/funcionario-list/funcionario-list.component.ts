import { Funcionarios } from '../../shared/mock/funcionario-mock';
import { FiltroService } from 'src/client/app/shared/services/filtro.service';
import { Funcionario } from '../../shared/models/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  public funcionarios: Funcionario[]
  filtro: String
  filterResult: FiltroService
  
  constructor(private filt: FiltroService) { 
    this.funcionarios = Funcionarios;
    this.filterResult = filt;
  }

  ngOnInit() {
  }

}
