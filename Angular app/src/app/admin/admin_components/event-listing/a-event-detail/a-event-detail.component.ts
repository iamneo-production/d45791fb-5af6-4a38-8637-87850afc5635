import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { event } from '../../../admin_interfaces/a-event';
import { EventService } from '../../../admin_services/a-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-a-event-detail',
  templateUrl: './a-event-detail.component.html',
  styleUrls: ['./a-event-detail.component.css']
})
export class AEventDetailComponent {
  eventId:number;
  event:event;
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
    this.event=this.es.getEventById(this.eventId);
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }


}
