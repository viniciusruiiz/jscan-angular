import { Menu } from './menu';

export class Usuario{
  IDFUNCIONARIO?: number;
  NMFUNCIONARIO?: string;
  NMEMAIL?: string;
  NMSENHA?: string;
  IDEMPRESA?: number;
  IDGESTOR?: number;
  IDTIPO?: number;
  NRTELEFONE?: string;
  token?: string;
  message?: string;
  menu: Menu[];
  IDCOMPUTADOR: number;
}