import { Pc } from './../models/pc';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Api } from '../models/api';


@Injectable({
    providedIn: 'root'
})

export class PcService {

    constructor(private http: HttpClient, private ls: LoginService) { }

    private readonly url = environment.dataApiUrl;
    private readonly httpOptions = {
        headers: new HttpHeaders().set("Authorization", "Bearer " + this.ls.funcionario.token)
    };

    get(id: number){
        return this.http.get<any>(this.url + `/pc/${id}`, this.httpOptions);
    }

    getByEmployer(id: number){
        return this.http.get<any>(this.url + `/pc/getByEmployer/${id}`, this.httpOptions);
    }
}