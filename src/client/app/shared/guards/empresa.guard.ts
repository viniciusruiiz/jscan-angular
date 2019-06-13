import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: LoginService,
    private router: Router){}
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.verificarAcesso();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verificarAcesso();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso() {

    if (this.authService.funcionario) {
      if (this.authService.funcionario.type == 3 && this.authService.funcionario.token) {
        return true;
      }
      alert("Você não tem permissão para acessar esta página!");
      this.router.navigate(['']);

      return false;
    } 

    alert("Você não tem permissão para acessar esta página!");
    this.router.navigate(['']);
  }
}
