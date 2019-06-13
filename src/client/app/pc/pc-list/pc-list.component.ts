import { LoginService } from './../../shared/services/login.service';
import { Funcionario } from './../../shared/models/funcionario';
import { FiltroService } from '../../shared/services/filtro.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {

  public funcionarios : Funcionario[];
  filtro: String
  filterResult: FiltroService //serviço de filtro
  public wait: Boolean = true;
  
  constructor(private filt: FiltroService, private loginService: LoginService, private userService: UserService) { 
    this.funcionarios = [];
    this.filterResult = filt;
  }

  async ngOnInit() {
    let idGst = this.loginService.funcionario.id;

    await this.userService.getUserByManager(idGst).forEach(data => {
      data.forEach(user => {
        user.pcMemory = Math.round(user.pcMemory / 1000)
        this.funcionarios.push(user)
      })
    })

    this.wait = false;
  }
}
