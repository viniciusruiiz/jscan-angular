import { LoginService } from './../../shared/services/login.service';
import { ApiService } from './../../shared/services/api.service';
import { Api } from '../../shared/models/api';
import { Apis } from '../../shared/mock/api-mock';
import { Component, OnInit } from '@angular/core';
import { FiltroService } from 'src/client/app/shared/services/filtro.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})

export class ApiListComponent implements OnInit {

  filtro: String //campo do filtro, no html
  apis: Api[];
  filterResult: FiltroService //serviço de filtro
  public wait: Boolean = true;

  constructor(private filt: FiltroService, private apiService: ApiService, private loginService: LoginService) {
    this.apis = [];
    this.filterResult = filt
  }

  async ngOnInit() {

    if (this.loginService.funcionario.idManager) {
      await this.apiService.getApis(this.loginService.funcionario.idManager).forEach(top => top.forEach(api => this.apis.push(api)));
    } else {
      await this.apiService.getApis(this.loginService.funcionario.id).forEach(top => top.forEach(api => this.apis.push(api)));
    }
    this.wait = false;
  }

}
