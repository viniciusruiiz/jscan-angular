import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario';
import { LoginService } from 'src/app/shared/services/login.service';
import { EmpresaService } from 'src/app/shared/services/empresa.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  constructor(private ls: LoginService, 
    private fb: FormBuilder, 
    private gs: EmpresaService) { }
  registerForm: FormGroup;
  foiEnviado: boolean = false;
  func: Funcionario;
  isDev: boolean = true;
  gestores: Funcionario[];
  ngOnInit() {
    this.gs.getGestores(this.ls.resposta.IDEMPRESA)
      .subscribe(data => {
        this.gestores = data;
        console.log(this.gestores)
      })

    this.registerForm = this.fb.group({
      nomeFuncionario: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      idGestor: [null]
    })
  }

  onRegister(){
    console.log(this.registerForm.get('idGestor').value);
    console.log(!this.isDev)
    this.foiEnviado = true;
    if(this.registerForm.status == "VALID"){
      console.log(this.ls.resposta.IDEMPRESA);
      this.func = this.registerForm.value;
      console.log(this.registerForm.value);
      console.log(this.func);
      
      if(this.isDev == true){
        this.func.idGestor = this.registerForm.get('idGestor').value;
      }else{
        this.func.idGestor = null;
      }
      this.func.idEmpresa = this.ls.resposta.IDEMPRESA;
      
      this.func.type = this.isDev ? 2 : 1;
      console.log(this.func)
       this.gs.setFuncionario(this.func)
         .subscribe(data => {
           console.log(data)
           if(data.message){
             alert(data.message)
             this.registerForm.reset();
            }else{
              alert('Usuário já cadastrado')
              this.registerForm.reset();
           }
         })
    }else{
      alert("Preencha corretamente todos os campos!!!")
    }
  }

  checked(b: boolean){
    if(this.isDev != b){
      this.isDev = !this.isDev;
    }
    console.log(this.isDev)
  }
}
