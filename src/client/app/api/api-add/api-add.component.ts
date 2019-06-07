import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-add',
  templateUrl: './api-add.component.html',
  styleUrls: ['./api-add.component.scss']
})
export class ApiAddComponent implements OnInit {

  //private _formBuilder: FormBuilder
  private registerForm: FormGroup;

  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      description: [''],
      endpoint: ['', Validators.required]
    })
  }
  
  //simulação para entender os validators
  onClick(){
    let name = this.registerForm.get('name').get;
    console.log(name, "AAAAAAAAAAAAAA");
    let nameerror = this.registerForm.get('name')
    if(!!nameerror.errors){
      console.log(nameerror.errors)
      console.log("erro")
      window.alert("erro de validação no campo")
    } else {
      console.log('sem erros')
      console.log("cadastrou! uhuu")
      window.alert("cadastrado com sucesso! :)")
    }
  }
}
