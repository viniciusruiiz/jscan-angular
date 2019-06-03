import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { Usuario } from '../models/usuario';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class LoginService implements OnInit {

  private url = environment.urlapi ;
  constructor(private http: HttpClient, private router: Router) { 
    
    this.estaLogado.emit(false)
  }
  
  ngOnInit(){
  }
 
  funcionario: Funcionario;
  resposta: Usuario;

  nomeFuncionario = new EventEmitter<String>();
  estaLogado = new EventEmitter<Boolean>();
  mostrarSpinner = new EventEmitter<Boolean>();
  menuEmitter = new EventEmitter<Boolean>();

  fazerLogin(login: String, senha: String){
      this.mostrarSpinner.emit(true);
      return this.http.post<any>(this.url + '/auth', { email: login, senha: senha }).subscribe(data => {
        console.log(data)
        this.resposta = data;
        if(this.resposta.token){
          this.estaLogado.emit(true);
          this.menuEmitter.emit(true);
          this.mostrarSpinner.emit(false);
          this.nomeFuncionario.emit(this.resposta.NMFUNCIONARIO);

          alert(this.resposta.message);
          if(this.resposta.IDTIPO == 1){

            this.router.navigate([`/gestor`]);

          }else if(this.resposta.IDTIPO == 2){

            this.router.navigate(['/dev']);

          }else if(this.resposta.IDTIPO == 3){

            this.router.navigate(['/empresa']);

          }

        }else{

          alert(data.message);

          this.mostrarSpinner.emit(false);

        }
        
      });      
  }

  deslogar(){
    this.menuEmitter.emit(false);
    this.estaLogado.emit(false);
    alert('Você será redirecionado para a tela de login!');
    this.router.navigate(['/']);
  }

  cadastrar(f: Funcionario){
    this.http.post(this.url + "/company/add", f)
      .subscribe(data =>{
         alert(data[0].message)
      })
  }

  setFalse(){
    this.estaLogado.emit(false);
  }
}
