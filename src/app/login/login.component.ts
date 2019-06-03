import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: String;
  senha: String;
  mostrarSpinner;
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder){}

 
  
  async ngOnInit() {
    document.body.classList.add('bg-img');
    
    console.log(this.mostrarSpinner)
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
    await this.loginService.setFalse();
    
    this.loginService.mostrarSpinner.subscribe(bool => this.mostrarSpinner = bool);
  }


  logar(){

    this.loginService.fazerLogin(this.loginForm.get('email').value, this.loginForm.get('senha').value)
    
  }

 
   

}
