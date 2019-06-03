import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { Menu } from 'src/app/shared/models/menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private ls: LoginService) { }

  mostrarMenu: boolean;
  lstmenu: Menu[];

  ngOnInit() {
    this.ls.menuEmitter.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar
        this.lstmenu = this.ls.resposta.menu;
        console.log(this.lstmenu);
      }
    );
  }
}
