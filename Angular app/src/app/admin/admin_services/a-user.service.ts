import { Subject } from "rxjs";
import { user } from "../admin_interfaces/a-user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root',
  })
export class UserService{

    BASE_URL:string=localStorage.getItem("BASE_URL")+"/user";

    filterUpdate=new Subject<user[]>();

    isDeleted=new Subject<boolean>();

    users:user[];

    constructor(private http:HttpClient){}

    splitName(name:string){
        return name.split(' ');
    }

    getUsers(){
        return this.http.get<user[]>(this.BASE_URL);
    }

    getUserById(id:number){
        return this.http.get<user>(`${this.BASE_URL}/${id}`);
    }


    deleteUser(id:number){
        return this.http.delete(`${this.BASE_URL}/${id}`);
    }
    
}