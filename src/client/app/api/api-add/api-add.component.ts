import { LoginService } from './../../shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-add',
  templateUrl: './api-add.component.html',
  styleUrls: ['./api-add.component.scss']
})
export class ApiAddComponent implements OnInit {

  private registerForm: FormGroup;
  private doing: Boolean = false;

  constructor(private _fb: FormBuilder, private loginService: LoginService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      description: [''],
      endpoint: ['', Validators.required]
    })
  }

  onClick() {
    this.doing = true;

    const obj = {
      idGestor: this.loginService.funcionario.id,
      name: this.registerForm.get('name').value,
      type: 1,
      description: this.registerForm.get('description').value,
      endPoint: this.registerForm.get('endpoint').value
    }
    this.apiService.addApi(obj)
      .subscribe(data => {
        alert(data[0].message)

        if (data[0].success == 1) {
          this.router.navigate(['/manager/index'])
        }
        else {
          this.doing = false;
        }
      });
  }
}
