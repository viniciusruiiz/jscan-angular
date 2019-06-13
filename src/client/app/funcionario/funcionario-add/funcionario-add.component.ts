import { LoginService } from './../../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-add',
  templateUrl: './funcionario-add.component.html',
  styleUrls: ['./funcionario-add.component.scss']
})
export class FuncionarioAddComponent implements OnInit {

  private registerForm: FormGroup;
  private managers: [];
  private doing: Boolean = false;

  constructor(private _fb: FormBuilder, private loginService: LoginService, private userService: UserService, private router: Router) { }

  async ngOnInit() {
    let idCompany = this.loginService.funcionario.idCompany;

    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
      idManager: ['']
    })

    this.userService.getManagerByCompany(idCompany).subscribe(data => {
      this.managers = data;
    })
  }

  public create() {
    this.doing = true;

    const obj = {
      idEmpresa: this.loginService.funcionario.idCompany,
      nomeFuncionario: this.registerForm.get('name').value,
      email: this.registerForm.get('email').value,
      phone: this.registerForm.get('phone').value,
      senha: this.registerForm.get('password').value,
      type: this.registerForm.get('type').value,
      idGestor: this.registerForm.get('idManager').value
    }
    this.userService.add(obj).subscribe(data => {
      alert(data[0].message);
      
      if(data[0].success == 1){
        this.router.navigate(['/company/index'])
      } else {
        this.doing = false;
      }
    })
  }

  public showselectbox() {
    document.getElementById('selectbox').style.display = 'block';
  }

  public hideselectbox() {
    document.getElementById('selectbox').style.display = 'none';
  }

}
