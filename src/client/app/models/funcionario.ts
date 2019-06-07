import { Pc } from './pc';
import { Api } from './api';

export class Funcionario{
    idFuncionario?: number;
    idEmpresa?: number;
    idGestor?: number;
    type: number;
    nomeFuncionario: string;
    email: string;
    phone: string;
    cnpj? : string;
    message?: string;
    apis?: Api[];
    nomeEmpresa?: string;
    pc?: Pc;
    idComputador? : number
}