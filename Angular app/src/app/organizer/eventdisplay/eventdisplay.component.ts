import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/api/events.service';
import { Router } from '@angular/router';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-eventdisplay',
  templateUrl: './eventdisplay.component.html',
  styleUrls: ['./eventdisplay.component.css']
})
export class EventdisplayComponent implements OnInit{
  

  edit(id:number) {
    this.router.navigate([`organiser/${this.userId}/editevent/${id}`]);
  }

  
  userId:number=JSON.parse(localStorage.getItem("user")).id;

  organiser:any;
  constructor(private es:EventsService,private router:Router){

  }
  events:Event[];

  ngOnInit(){
    this.refreshEvents();
  }

  refreshEvents(){
    
    this.es.getEventsByOrganiserId(this.userId).subscribe(data=>{this.events=data;console.log(data);
    },err=>console.log(err)
    );
  }
  newEvent(){
    this.router.navigate([`organiser/${this.userId}/newevent`]);
  }
  manageEvent(){
    this.router.navigate(["/event"]);
  }

  isDeleted:boolean=false;
  deleteId:number;
  delete(id:number){
    this.es.deleteEvent(id).subscribe(response=>{this.isDeleted=true;setInterval(()=>this.isDeleted=false,3000)},err=>console.log(err)
    );
    this.deleteId=id;
    console.log(this.isDeleted);
    this.refreshEvents();
    
  }

}
