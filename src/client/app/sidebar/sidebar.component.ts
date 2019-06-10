import { LoginService } from './../shared/services/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavLists } from '../navLists';
import { ListNavItem } from '../shared/models/ListNavItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private ls: LoginService) { }

  navItens: ListNavItem[];

  async ngOnInit() {
    await this.ls.navItens.subscribe(data => this.navItens = data);
  }

}
