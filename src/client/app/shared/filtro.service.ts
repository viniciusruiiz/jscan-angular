import { Funcionario } from './../models/funcionario';
import { Pc } from './../models/pc';
import { Injectable } from '@angular/core';
import { Api } from '../models/api';

@Injectable({
  providedIn: 'root'
})

export class FiltroService {

  constructor() { }

  fillApi(apis: Api[], filtro: string){
    if(apis.length === 0 || filtro === undefined || filtro.trim() === ''){
      return apis;
    }

    return apis.filter(
      v => v.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
   );
  }

  fillPc(pc: Pc[], filtro: string){
    if(pc.length === 0 || filtro === undefined || filtro.trim() === ''){
      return pc;
    }

    return pc.filter(
      v => v.name.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
   );
  }

  fillDev(pc: Funcionario[], filtro: string){
    if(pc.length === 0 || filtro === undefined || filtro.trim() === ''){
      return pc;
    }

    return pc.filter(
      v => v.nomeFuncionario.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
   );
  }

}
