import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Role } from '../models/role';
import { Observable, tap } from 'rxjs';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.authUser.role.split('_')[1].toLowerCase();
  return authService.isAuth && role === Role.USER.toLowerCase()
    ? true
    : router.navigate(['/user-login']);
};
