import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/shared/services/empresa.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Funcionario } from 'src/app/shared/models/funcionario';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

  constructor(private es: EmpresaService, private dataprovider: LoginService) { }
  funcionarios: Funcionario[];
  ngOnInit() {
    this.es.getFuncionariosEmpresa(this.dataprovider.resposta.IDEMPRESA)
      .subscribe(dados => {
        console.log(dados);
        this.funcionarios = dados;
        console.log(this.funcionarios);
      })
  }

  excluirUsuario(f : Funcionario){
    let confir = confirm('Deseja realmente excluir esse funcionario ?');
    if(confir){
      this.es.deleteFuncionarios(f.idFuncionario).subscribe(data => {
        console.log(data)
      })
      alert('Excluido com sucesso')
    }
  }

}
