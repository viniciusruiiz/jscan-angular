import { ListNavItem } from './models/ListNavItem';
import { ListNav } from './models/ListNav';

export const NavLists: ListNav[] = [{
    id: 1,
    navItens: [
        {
            name: "Início",
            path: "/manager",
            faIcon: "home"
        },
        {
            name: "Cadastrar API",
            path: "/addapi",
            faIcon: "cogs"
        }
    ]
}]