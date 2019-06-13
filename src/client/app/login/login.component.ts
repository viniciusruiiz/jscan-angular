import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mostrarSpinner;
  loginForm: FormGroup;
  private doing: Boolean = false;

  constructor(private loginService: LoginService, private fb: FormBuilder){}

  async ngOnInit() {
    document.body.classList.add('bg-img');
    
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
