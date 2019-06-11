import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Read } from '../models/read';
;

@Injectable({
    providedIn: 'root'
})

export class ReadService {

    constructor(private http: HttpClient, private ls: LoginService) { }

    private readonly url = environment.dataApiUrl;
    private readonly httpOptions = {
        headers: new HttpHeaders().set("Authorization", "Bearer " + this.ls.funcionario.token)
    };

    getPcCpuPercentage(id: number) {
        return this.http.get<any[]>(this.url + `/read/pc/cpu/${id}`, this.httpOptions);
    }

    getPcRamPercentage(id: number) {
        return this.http.get<any[]>(this.url + `/read/pc/memoryPercentageAvailable/${id}`, this.httpOptions);
    }

    getPcDiskReadAverage(id: number) {
        return this.http.get<any[]>(this.url + `/read/pc/diskreadavarage/${id}`, this.httpOptions);
    }

    getPcAvailableStoragePercentage(id: number) {
        return this.http.get<any>(this.url + `/read/pc/availableStorage/${id}`, this.httpOptions);
    }

    getPcProcessNumber(id: number) {
        return this.http.get<any>(this.url + `/read/pc/processnumber/${id}`, this.httpOptions);
    }

    getPcUpTime(id: number) {
        return this.http.get<any>(this.url + `/read/pc/uptime/${id}`, this.httpOptions);
    }

}