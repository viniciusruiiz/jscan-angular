import { Funcionario } from './../shared/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { NavLists } from '../navLists';
import { LoginService } from '../shared/services/login.service';
import { ListNavItem } from '../shared/models/ListNavItem';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

})
export class NavBarComponent implements OnInit {

  constructor(private ls: LoginService) { }

  navItens : ListNavItem[];

  isCollapsed = true;

  nomeFunc: string;
  async ngOnInit() {
    await this.ls.nomeFuncionario.subscribe(data => this.nomeFunc = data);

    await this.ls.navItens.subscribe(data => this.navItens = data);
  }

  public logoff(){
    this.ls.deslogar();
  }
}
