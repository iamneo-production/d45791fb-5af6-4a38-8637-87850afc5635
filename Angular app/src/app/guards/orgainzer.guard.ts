import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Role } from '../models/role';

export const orgainzerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuth && authService.authUser.Role === Role.ORAGANIZER
    ? true
    : router.navigate(['/organiser-login']);
};
