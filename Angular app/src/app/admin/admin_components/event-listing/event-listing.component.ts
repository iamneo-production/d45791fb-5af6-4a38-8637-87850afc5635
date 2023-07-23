import { Component } from '@angular/core';
import { EventService } from '../../admin_services/a-event.service';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent {

    events:Event[];

    constructor(private es:EventService){
    }

    ngOnInit(){
      this.es.getEvents().subscribe((Response:Event[])=>{
        console.log(Response);
        this.events=[...Response].filter((data)=>{
            return data.organiser!=null;
        });
    },error=>
        console.log(error)
    );
    
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
