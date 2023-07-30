import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../models/event';
import { EventService } from '../../../admin_services/a-event.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-a-event-detail',
  templateUrl: './a-event-detail.component.html',
  styleUrls: ['./a-event-detail.component.css'],
  providers:[DatePipe]
})
export class AEventDetailComponent {
  eventId:number;
  event:Event;
  routeSubscription:Subscription;
  constructor(private route:ActivatedRoute,private es:EventService){
  }

  ngOnInit(){
    this.routeSubscription=this.route.params.subscribe(param=>{
      this.eventId=param['id'];
      this.getData();
    });
  }

  getData(){
    this.es.getEventById(this.eventId).subscribe(data=>{
      console.log("event based on id is :"+data.name);
      this.event=data;
    },error=>console.log(error));
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }


}
