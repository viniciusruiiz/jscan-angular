import { UserService } from './../../shared/services/user.service';
// import { Funcionarios } from '../../shared/mock/funcionario-mock';
import { FiltroService } from 'src/client/app/shared/services/filtro.service';
import { Funcionario } from '../../shared/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  public funcionarios: Funcionario[]
  filtro: String
  filterResult: FiltroService
  public wait: Boolean = true;

  constructor(private loginService: LoginService, private filt: FiltroService, private userService: UserService, private router: Router) {
    this.funcionarios = [];
    this.filterResult = filt;
  }

  async ngOnInit() {
    let idCompany = await this.loginService.funcionario.idCompany;

    await this.userService.getUserByCompany(idCompany).forEach(data => {
      data.forEach(user => {
        this.funcionarios.push(user);
      })
    })

    this.wait = false;
  }

  public delete(id: number) {

    let confirmation = confirm("Tem certeza que deseja deletar esse funcionário?")

    if (confirmation) {
      document.getElementById(id.toString() + 'a').style.display = 'none'
      document.getElementById(id.toString() + 'b').style.display = 'block'

      this.userService.delete(id).subscribe(data => {
        alert('Deletado com sucesso!');
        this.funcionarios = [];
        this.wait = true;
        this.ngOnInit();
      });
    } else {
      document.getElementById(id.toString() + 'a').style.display = 'block'
      document.getElementById(id.toString() + 'b').style.display = 'none'
    }
  }
}
