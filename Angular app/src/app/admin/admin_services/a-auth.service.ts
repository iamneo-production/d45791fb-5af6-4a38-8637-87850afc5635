import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";


interface loginResponse{
    msg:string;
    data:any;
}


@Injectable({
    providedIn: 'root',
  })
export class AdminAuthService{

    route=inject(Router);
    isLoggedIn:boolean;
    url="http://localhost:8080/signin";
    token:string="";
    constructor(private http:HttpClient){

    }

    login(username:string,password:string){
        const requsetBody={
            "email":username,
            "password":password
        };
        this.http.post<loginResponse>(this.url,requsetBody).subscribe(response=>{
            this.token=response.data.jwt;
            console.log('Hey buddy u had been logged in successfully'+this.token);
            this.isLoggedIn=true;
            this.route.navigate(['admin/dashboard']);
        },error=>console.log(error)
        );
        
    }
    // login(){
    //     console.log('Hey buddy u had been logged in successfully');
    //     this.isLoggedIn=true;
    //     this.route.navigate(['admin/dashboard']);
    // }

    logout(){
        this.isLoggedIn=false;
        console.log('Admin has logged out successfully');
    }

}