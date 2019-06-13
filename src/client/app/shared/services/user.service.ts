import { Funcionario } from './../models/funcionario';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
;

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient, private ls: LoginService) { }

    private readonly url = environment.dataApiUrl;
    private readonly httpOptions = {
        headers: new HttpHeaders().set("Authorization", "Bearer " + this.ls.funcionario.token)
    };

    getUserByManager(id: number) {
        return this.http.get<Funcionario[]>(this.url + `/users/getByManager/${id}`, this.httpOptions);
    }

    getUserByCompany(id: number) {
        return this.http.get<Funcionario[]>(this.url + `/company/users/get/${id}`, this.httpOptions);
    }

    getManagerByCompany(id: number) {
        return this.http.get<any>(this.url + `/company/manager/list/${id}`, this.httpOptions)
    }
    
    add(user: any){
        return this.http.post<any>(this.url + `/users/add`, user, this.httpOptions);
    }

    delete(id: number){
        return this.http.post<any>(this.url + `/users/delete/${id}`, null, this.httpOptions);
    }

}