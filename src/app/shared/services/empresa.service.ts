import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.ls.resposta.token);
  //new HttpHeaders({ 'Content-Type': 'application/json'}
  httpOptions = {
    headers: this.headers_object
    
  };
  constructor(private ls: LoginService, private http: HttpClient) { }
  url = environment.urlapi;

  getFuncionariosEmpresa(id: number){
    return this.http.get<Funcionario[]>(this.url + `/company/get/${id}`, this.httpOptions)
  }

  
  setFuncionario(func: Funcionario){
    return this.http.post<any>(this.url + `/users/add`, func, this.httpOptions);
  }

  deleteFuncionarios(id: number){
    return this.http.post<any>(this.url + `/users/delete/${id}`,'teste' ,this.httpOptions)
  }

  getGestores(id: number){
    return this.http.get<any>(this.url + `/company/manager/list/${id}`, this.httpOptions)
  }
}

