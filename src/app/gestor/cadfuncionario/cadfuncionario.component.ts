import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario';
import { GestorService } from 'src/app/shared/services/gestor.service';

@Component({
  selector: 'app-cadfuncionario',
  templateUrl: './cadfuncionario.component.html',
  styleUrls: ['./cadfuncionario.component.scss']
})
export class CadfuncionarioComponent implements OnInit {

  constructor(private ls: LoginService, private fb: FormBuilder, private gs: GestorService) { }
  registerForm: FormGroup;
  foiEnviado: boolean = false;
  func: Funcionario;

  ngOnInit() {
    this.registerForm = this.fb.group({
      nomeFuncionario: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    })
  }

  onRegister(){
    this.foiEnviado = true;
    if(this.registerForm.status == "VALID"){
      console.log(this.ls.resposta.IDEMPRESA);
      this.func = this.registerForm.value
      
      this.func.idEmpresa = this.ls.resposta.IDEMPRESA;
      this.func.idGestor = this.ls.resposta.IDFUNCIONARIO;
      this.func.type = 2;
      alert('opa')
      console.log(this.func)
      //  this.gs.setFuncionario(this.func)
      //    .subscribe(data => {
      //      if(data.message){
      //        alert(data.message)
      //      }else{
      //        alert('Usuário já cadastrado')
      //      }
      //    })
    }else{
      alert("Preencha corretamente todos os campos!!!")
    }
  }

}
