import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { ListNavItem } from '../models/ListNavItem';
import { NavLists } from '../../navLists';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    private url = environment.dataApiUrl;
    constructor(private http: HttpClient, private router: Router) {

        this.estaLogado.emit(false)
    }

    funcionario: Funcionario;

    //id = new EventEmitter<number>();
    nomeFuncionario = new EventEmitter<String>();
    estaLogado = new EventEmitter<Boolean>();
    mostrarSpinner = new EventEmitter<Boolean>();
    navItens = new EventEmitter<ListNavItem[]>();

    fazerLogin(login: String, senha: String) {

        this.mostrarSpinner.emit(true);

        return this.http.post<Funcionario>(this.url + '/auth', { email: login, senha: senha }).subscribe(data => {

            if (data.token) {
                this.funcionario = data;
                this.estaLogado.emit(true);
                this.mostrarSpinner.emit(false);
                this.nomeFuncionario.emit(data.name);

                if (data.type == 1) {

                    this.navItens.emit(NavLists[0].navItens);
                    this.router.navigate([`/manager/index`]);

                } else if (data.type == 2) {

                    this.navItens.emit(NavLists[1].navItens);
                    this.router.navigate(['/dev/index']);

                } else if (data.type == 3) {

                    this.navItens.emit(NavLists[2].navItens);
                    this.router.navigate(['/company/index']);

                }

            } else {

                alert(data.message);

                this.mostrarSpinner.emit(false);

            }

        });
    }

    deslogar() {
        let confirmation = confirm("Tem certeza que deseja sair?");
        if (confirmation) {
            this.estaLogado.emit(false);
            this.router.navigate(['/']);
        }
    }

    cadastrar(funcionario: Funcionario) {
        this.http.post(this.url + "/company/add", funcionario)
            .subscribe(data => {
                alert(data[0].message)
                this.router.navigate(['/'])
            })
    }

    setFalse() {
        this.estaLogado.emit(false);
    }
}
