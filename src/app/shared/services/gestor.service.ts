import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/funcionario';
import { Api } from '../models/api';
import { PcDados } from '../models/pcdados';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})




export class GestorService {
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.ls.resposta.token);
  //new HttpHeaders({ 'Content-Type': 'application/json'}
  httpOptions = {
    headers: this.headers_object
    
  };
  constructor(private http: HttpClient, private ls: LoginService) { }
  private url = environment.urlapi;

  getFuncionarios(id: number): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.url + `/users/getlist/${id}`, this.httpOptions)
  } 

  getApis(id: number){
    return this.http.get<Api[]>(this.url + `/users/api/${id}`, this.httpOptions);
  } 

  //nao sei oq colocar na model de detalhe 
  // detalheAPI(id){
  //   return this.http.get<ApiDetalhe>(this.url + `/api/${id}`);
  // }

  setAPI(api: Api){
    return this.http.post(this.url + `/users/api`, api, this.httpOptions);
  }


  getDadosPc(id){
    return this.http.get<PcDados>(this.url + `/users/pc/dados/${id}`, this.httpOptions);
  }

  addApi(obj: any){
    return this.http.post<any>(this.url + '/api/add', obj, this.httpOptions)
  }

}
