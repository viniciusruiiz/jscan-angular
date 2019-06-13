import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private ls: LoginService) { }
  registerForm: FormGroup;
  foiEnviado: boolean = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      nomeFuncionario: ['', Validators.required],
      phone: ['', Validators.required],
      nomeEmpresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', Validators.email],
      senha: ['', Validators.required],
    })
  }

  onRegister(){
    this.foiEnviado = true;
    if(this.registerForm.status == "VALID"){
      this.ls.cadastrar(this.registerForm.value);
      this.registerForm.reset()
    }else{
      alert("Preencha corretamente todos os campos!!!")
      
    }
  }

}
