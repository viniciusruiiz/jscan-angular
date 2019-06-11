import { Pc } from './pc';
import { Api } from './api';

export class Funcionario{
    id: number;
    name: string;
    idManager?: number;
    idCompany: number;
    type: number;
    apis?: Api[];
    pc?: Pc;
    token?: string;
    message? : string;
    idPc? : number;
    //email: string;
    //phone: string;
    //cnpj? : string;
    //message?: string;
    //nomeEmpresa?: string;
    //idComputador? : number
}