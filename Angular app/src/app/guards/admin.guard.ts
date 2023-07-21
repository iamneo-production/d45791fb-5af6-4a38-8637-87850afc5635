import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.authUser.role.split('_')[1].toLowerCase();
  return authService.isAuth && role === Role.ADMIN.toLowerCase()
    ? true
    : router.navigate(['/admin/login']);
};
