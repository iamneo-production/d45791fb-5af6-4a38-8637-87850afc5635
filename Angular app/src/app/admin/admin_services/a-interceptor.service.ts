import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AdminAuthService } from "./a-auth.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AAuthInterceptorService implements HttpInterceptor{
    token:string;
    constructor(private authService:AdminAuthService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.token=this.authService.token;
        let newUrl=req.clone({
            headers:req.headers.append("Authorization","Bearer "+this.token)
        });
        console.log(req.url);
        return next.handle(newUrl);
        
    }
} 