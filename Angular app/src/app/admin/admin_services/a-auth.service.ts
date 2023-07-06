import { inject } from "@angular/core";
import { Router } from "@angular/router";

export class AdminAuthService{

    route=inject(Router);
    isLoggedIn:boolean;

    login(){
        console.log('Hey buddy u had been logged in successfully');
        this.isLoggedIn=true;
        this.route.navigate(['admin/dashboard']);
    }

    logout(){
        this.isLoggedIn=false;
        console.log('Admin has logged out successfully');
    }

}