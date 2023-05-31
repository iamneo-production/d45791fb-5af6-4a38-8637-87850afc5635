import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('Guarding');
  console.log(authService.isAuth);

  if (authService.isAuth && authService.authUser.Role === Role.ADMIN)
    return true;

  return router.navigate(['/admin/login']);
};
