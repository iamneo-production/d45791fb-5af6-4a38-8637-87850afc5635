import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/api/events.service';

@Component({
  selector: 'app-eventdisplay',
  templateUrl: './eventdisplay.component.html',
  styleUrls: ['./eventdisplay.component.css']
})
export class EventdisplayComponent implements OnInit{
  isEdit = false;
  edit() {
    this.isEdit = true;
  }

  organiser:any;
  constructor(private es:EventsService){

  }
  events:Event[];

  ngOnInit(){
    this.es.getEvents().subscribe(data=>{this.events=data;console.log(data);
    },err=>console.log(err)
    )
  }

}
