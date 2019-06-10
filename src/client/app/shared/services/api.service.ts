import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Api } from '../models/api';
;

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient, private ls: LoginService) { }

    private readonly url = environment.dataApiUrl;
    private readonly httpOptions = {
        headers: new HttpHeaders().set("Authorization", "Bearer " + this.ls.funcionario.token)
    };

    getApis(id: number){
        console.log()

        return this.http.get<Api[]>(this.url + `/api/list/${id}`, {headers: new HttpHeaders().set("Authorization", "Bearer " + this.ls.funcionario.token)});
    } 
}