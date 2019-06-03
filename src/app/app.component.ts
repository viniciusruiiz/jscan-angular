import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  resposta: any;
  constructor(private ls: LoginService)
  {}
  
  async ngOnInit(){
    this.resposta = await this.ls.estaLogado.subscribe(data => this.resposta = data);
  }
  

}



