import { Component, OnInit } from '@angular/core';
import { GestorService } from '../shared/services/gestor.service';
import { LoginService } from '../shared/services/login.service';
import { FiltroService } from '../shared/services/filtro.service';
import { Funcionario } from '../shared/models/funcionario';
import { ApiDataService } from '../shared/services/api-data.service';
import { Api } from '../shared/models/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {
  apis: Observable<Api[]>;
  constructor(private gestorService: GestorService, 
    private loginService: LoginService,
    public fillService: FiltroService,
    private apdata: ApiDataService
    ) { }
    
    listaFuncionarios: Funcionario[];
    filtro: string = '';
    input: string = '';
    listaFuncs$: Observable<Funcionario[]>;
    filro = this.fillService;

  async ngOnInit() {
    this.listaFuncs$ = await this.gestorService.getFuncionarios(this.loginService.resposta.IDFUNCIONARIO);
    console.log(this.listaFuncs$)
    this.apis = await this.apdata.getAll(this.loginService.resposta.IDFUNCIONARIO);
    console.log(this.apis)
    // console.log(this.apis)
    // this.apdata.getAll(this.loginService.resposta.IDFUNCIONARIO)
    // .subscribe(data => console.log(data))
  }
}
