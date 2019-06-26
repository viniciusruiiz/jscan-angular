import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
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

    getPcLastReadTime (id: number) {
        return this.http.get<any[]>(this.url + `/read/pc/lastReadTime/${id}`, this.httpOptions);
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

    getApiPercentageTimeUp(id: number) {
        return this.http.get<any>(this.url + `/read/api/percentageTimeUp/${id}`, this.httpOptions);
    }

    getApiTimesDownInMonth(id: number) {
        return this.http.get<any>(this.url + `/read/api/numberTimesDown/${id}`, this.httpOptions);
    }

    getApiTimesDownInLastMonth(id: number) {
        return this.http.get<any>(this.url + `/read/api/numberTimesDownLastMonth/${id}`, this.httpOptions);
    }

    getApiTimesDownInLastMonth2(id: number) {
        return this.http.get<any>(this.url + `/read/api/numberTimesDownLastMonth2/${id}`, this.httpOptions);
    }

    getApiTimesDownInLastMonth3(id: number) {
        return this.http.get<any>(this.url + `/read/api/numberTimesDownLastMonth3/${id}`, this.httpOptions);
    }

}