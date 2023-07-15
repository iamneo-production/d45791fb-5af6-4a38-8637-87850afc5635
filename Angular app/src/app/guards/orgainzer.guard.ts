import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Role } from '../models/role';

export const orgainzerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const role = authService.authUser.role.split('_')[1].toLowerCase();
  return authService.isAuth && role === Role.ORAGANISER.toLowerCase()
    ? true
    : router.navigate(['/organiser-login']);
};
