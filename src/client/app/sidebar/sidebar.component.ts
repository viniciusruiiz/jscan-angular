import { Component, OnInit, Input } from '@angular/core';
import { NavLists } from '../navLists';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItens = NavLists[0].navItens;

  constructor() { }

  ngOnInit() {
  }

}
