import { ListNavItem } from './models/ListNavItem';
import { ListNav } from './models/ListNav';

export const NavLists: ListNav[] = [{
    id: 1,
    navItens: [
        {
            name: "Início",
            path: "/manager/index",
            faIcon: "home"
        },
        {
            name: "Cadastrar API",
            path: "/manager/addapi",
            faIcon: "cogs"
        }
    ]
}]