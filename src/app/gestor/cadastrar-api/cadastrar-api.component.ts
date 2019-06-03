import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestorService } from 'src/app/shared/services/gestor.service';

@Component({
  selector: 'app-cadastrar-api',
  templateUrl: './cadastrar-api.component.html',
  styleUrls: ['./cadastrar-api.component.css']
})
export class CadastrarApiComponent implements OnInit {

  constructor(private ls: LoginService, private fb: FormBuilder, private gs: GestorService) { }
  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      //caso seja adicionado o campo
      //type: ['', Validators.required],
      //description: ['', Validators.required],
      endpoint: ['', Validators.required],
    })
  }

  onClick(){
    const obj = {
      idGestor: this.ls.resposta.IDFUNCIONARIO,
      name: this.registerForm.get('name').value,
      type: 1,
      description: null,
      endPoint: this.registerForm.get('endpoint').value
    }
    console.log(obj)
    this.gs.addApi(obj)
      .subscribe(data => {
        alert(data[0].message)
        console.log(data)
      });
  }
}
