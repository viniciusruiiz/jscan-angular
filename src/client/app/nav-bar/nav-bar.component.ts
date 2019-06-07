import { Component, OnInit } from '@angular/core';
import { NavLists } from '../navLists';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
  
})
export class NavBarComponent implements OnInit {

  navItens = NavLists[0].navItens

  constructor() { }

  isCollapsed = true;
  ngOnInit() {
  }

}
