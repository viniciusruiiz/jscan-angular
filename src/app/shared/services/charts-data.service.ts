import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PcDados } from '../models/pcdados';
import { LoginService } from './login.service';
import { Pc } from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.ls.resposta.token);
  httpOptions = {
    headers: this.headers_object
    
  };
  constructor(private http: HttpClient, private ls: LoginService) { }
  private url = environment.urlapi;

  
  getDadosPc(id: any) {
    return this.http.get<Pc[]>(this.url + '/pc/' + id, this.httpOptions)
  }
  getDadosProcessamentoPC(id: Number){
    return this.http.get<PcDados[]>(this.url + `/read/pc/cpu/${id}`, this.httpOptions)
  }

  getMemoriaeRamTotal(id){
    console.log(id)
    return this.http.get<any>(this.url + `/read/pc/totalDiskRam/${id}`, this.httpOptions);
  }

  getArmazenamentoUtilizado(id){
    return this.http.get<any>(this.url + `/read/pc/disk/${id}`, this.httpOptions);
  }

  getRamUtilizado(id){
    return this.http.get<any>(this.url + `/read/pc/ram/${id}`, this.httpOptions);
  }

}
