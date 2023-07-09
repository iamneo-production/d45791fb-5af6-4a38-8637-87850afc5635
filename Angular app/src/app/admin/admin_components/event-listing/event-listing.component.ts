import { Component } from '@angular/core';
import { EventService } from '../../admin_services/a-event.service';
import { event } from '../../admin_interfaces/a-event';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent {

    events:event[];

    constructor(private es:EventService){
    }

    ngOnInit(){
      this.events=this.es.getEvents();
      this.es.filterUpdate.subscribe(data=>{
        this.events=data;
      })
      console.log('iam back'+this.events);
    }

    ngOnDestroy(){
      //want to unsubscribe to the event data upon the signout !!! imp !
      console.log('bye byee');
    }


}
