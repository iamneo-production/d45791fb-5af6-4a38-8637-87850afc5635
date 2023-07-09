import { Injectable, inject } from "@angular/core";
import { AdminAuthService } from "../a-auth.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AdminGuard implements CanActivate{

    auth=inject(AdminAuthService);
    router=inject(Router)

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | Promise<boolean> | Observable<boolean> {
        return this.auth.isLoggedIn?true:this.router.navigate(['/admin/login']);
    }

}