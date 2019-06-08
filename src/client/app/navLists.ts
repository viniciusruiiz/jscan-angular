import { ListNavItem } from './models/ListNavItem';
import { ListNav } from './models/ListNav';

export const NavLists: ListNav[] = [{
    id: 1,
    navItens: [{
        name: "Início",
        path: "/manager/index",
        faIcon: "home"
    },
    {
        name: "Cadastrar API",
        path: "/manager/addapi",
        faIcon: "cogs"
    }]
},
{
    id: 2,
    navItens: [{
        name: "Seu computador",
        path: "/dev/index",
        faIcon: "desktop"
    },
    {
        name: "Lista de API's",
        path: "/dev/apilist",
        faIcon: "list-ul"
    }]
},
{
    id: 3,
    navItens: [{
        name: "Funcionários",
        path: "/company/index",
        faIcon: "list-ul"
    },
    {
        name: "Adicionar Funcionário",
        path: "/company/add",
        faIcon: "user-cog"
    }]
}]