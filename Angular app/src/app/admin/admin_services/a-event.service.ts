import { Subject } from "rxjs";
import { Event } from '../../models/event';
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class EventService{
    
    filterUpdate=new Subject<Event[]>();
    eventById:Event;    
    url="http://localhost:8080/event";


    constructor(private http:HttpClient){
        
    }
    getEvents(){
       return this.http.get(this.url);
    }

    getEventById(id:number){
         return this.http.get<Event>(this.url+'/'+id)
    }
}