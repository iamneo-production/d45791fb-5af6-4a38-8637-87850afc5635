import { Subject } from "rxjs";
import { Event } from '../../models/event';
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class EventService{
    
    filterUpdate=new Subject<Event[]>();
    DeleteUpdate=new Subject<boolean>();
    eventById:Event;    
    url=localStorage.getItem("BASE_URL")+"/event";

    constructor(private http:HttpClient){
    }
    getEvents(){
       return this.http.get<Event[]>(this.url);
    }

    getEventById(id:number){
         return this.http.get<Event>(this.url+'/'+id)
    }

    deleteEvent(id:number){
      return this.http.delete(this.url+"/"+id);
    }
    getEventsByOrganiserId(id:number){
      return this.http.get<Event[]>(`${this.url}/organiser/${id}`);
    }
}