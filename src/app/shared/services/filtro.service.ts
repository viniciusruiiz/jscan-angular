import { Injectable } from '@angular/core';
import { Api } from '../models/api';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor() { }
  
  fill(apis: Api[], filtro: string){
    if(apis){
      if(apis.length === 0 || filtro === undefined || filtro.trim() === ''){
        return apis;
      }

      return apis.filter(
        v => v.nmApi.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
      );

    }
  }

  fillFuncs(funcs: Funcionario[], filtro: string){
    if(funcs){
      if(funcs.length == 0 || filtro === undefined || filtro.trim() === ''){
        return funcs;
      }
  
      return funcs.filter(
        v => v.nomeFuncionario.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
     );
    }
   
  }

}
