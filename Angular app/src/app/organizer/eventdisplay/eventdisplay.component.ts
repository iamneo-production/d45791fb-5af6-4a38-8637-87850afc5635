import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/api/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventdisplay',
  templateUrl: './eventdisplay.component.html',
  styleUrls: ['./eventdisplay.component.css']
})
export class EventdisplayComponent implements OnInit{
  
  edit() {
    this.router.navigate(["editevent"]);
  }

  organiser:any;
  constructor(private es:EventsService,private router:Router){

  }
  events:Event[];

  ngOnInit(){
    this.es.getEvents().subscribe(data=>{this.events=data;console.log(data);
    },err=>console.log(err)
    )
  }
  newEvent(){
    this.router.navigate(["/createvent"]);
  }
  manageEvent(){
    this.router.navigate(["/event"]);
  }

}
