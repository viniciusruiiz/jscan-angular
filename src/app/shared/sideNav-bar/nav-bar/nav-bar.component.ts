import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private ls: LoginService) { }

  mostrarMenu: boolean;
  lstmenugst: Menu[];
  lstmenudev: Menu[];
  nomeFunc: string;
  async ngOnInit() {
    this.ls.menuEmitter.subscribe(
      mostrar => {
      this.mostrarMenu = mostrar
      this.lstmenugst = this.ls.resposta.menu
      });
    //this.lstmenudev = Lstdev;
    await this.ls.nomeFuncionario.subscribe(data => this.nomeFunc = data);

  }
  
}
