import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Role } from '../models/role';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('Guarding');
  console.log(authService.isAuth, authService.authUser);

  if (authService.isAuth && authService.authUser.Role === Role.USER)
    return true;

  return router.navigate(['/login']);
};
