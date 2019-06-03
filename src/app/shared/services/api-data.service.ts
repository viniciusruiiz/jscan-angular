import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Api } from '../models/api';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.ls.resposta.token);
  httpOptions = {
    headers: this.headers_object
    
  };
  constructor(private http: HttpClient, private ls: LoginService) { }
  private url = environment.urlapi;

  getAll(id: Number): Observable<Api[]>{
    return this.http.get<Api[]>(this.url + `/api/list/${id}`, this.httpOptions)
  }

  getOne(id: Number): Observable<Api>{
    return this.http.get<Api>(this.url + `/api/${id}`, this.httpOptions)
  }

  getPorcentagemApi(id: number){
    return this.http.get<Api>(this.url + '/read/api/percentageTimeUp/' + id, this.httpOptions)
  }

  getQuantidadeQuedas(id: number){
    return this.http.get<Api>(this.url + '/read/api/numberTimesDown/' + id, this.httpOptions)
  }
  
  
}
