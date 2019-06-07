import { Apis } from './api-mock';
import { Pcs } from './pc-mock';
import { Funcionario } from '../models/funcionario'

//tipos
//1 - gestor comum
//2 - dev
//3 - gestor empresa

export const Funcionarios: Funcionario[] = [
    {
        idFuncionario: 1,
        idEmpresa: 1,
        idGestor: 6,
        nomeFuncionario: "Vinicius",
        email: "vinicius@email.com",
        type:2,
        phone: "981236333",
        pc: Pcs[0],
        apis: Apis,
    },
    {
        idFuncionario: 2,
        idEmpresa: 1,
        idGestor: 6,
        nomeFuncionario: "Thiago",
        email: "thiago@email.com",
        type:2,
        phone: "983326423",
        pc: Pcs[1],
        apis: Apis,
    },    
    {
        idFuncionario: 3,
        idEmpresa: 1,
        idGestor: 6,
        nomeFuncionario: "Phelipe",
        email: "phelipe@email.com",
        type:2,
        phone: "982837492",
        pc: Pcs[2],
        apis: Apis,
    },    
    {
        idFuncionario: 4,
        idEmpresa: 1,
        idGestor: 6,
        nomeFuncionario: "Michelle",
        email: "michelle@email.com",
        type:2,
        phone: "982657632",
        pc: Pcs[3],
        apis: Apis,
    },    
    {
        idFuncionario: 5,
        idEmpresa: 1,
        idGestor: 6,
        nomeFuncionario: "Larissa",
        email: "larissa@email.com",
        type:2,
        phone: "992749239",
        pc: Pcs[4],
        apis: Apis,
    },
    {
        idFuncionario: 6,
        idEmpresa: 1,
        nomeFuncionario: "Gerson",
        email: "gerson@email.com",
        type:1,
        phone: "976547382",
        apis: Apis,
    },
    // {
    //     idFuncionario: 7,
    //     idEmpresa: 1,
    //     nomeFuncionario: "Djalma",
    //     email: "djalma@email.com",
    //     type:3,
    //     phone: "954736473",
    //     apis: Apis,
    // },
]