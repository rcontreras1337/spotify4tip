import { Token } from '@angular/compiler';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const cookieService = inject(CookieService);  // Inyectar CookieService
  const router = inject(Router);
  try {
    const sessionCookie = cookieService.check('token_service');   // Obtener la cookie de sesión
    if (!sessionCookie) {
      router.navigate(['/', 'auth']);
    }
    return sessionCookie;
  } catch (e) {
    console.log(e);
    return false;
  }

};
