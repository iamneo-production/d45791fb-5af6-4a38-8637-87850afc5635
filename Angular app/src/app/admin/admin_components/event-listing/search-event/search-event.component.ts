import { Component } from '@angular/core';
import { event } from '../../../admin_interfaces/a-event';
import { EventService } from '../../../admin_services/a-event.service';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})
export class SearchEventComponent {

  events:event[];
  search_term:string;
  constructor(private es:EventService){
    
  }

  search(){
      this.events=this.es.getEvents().filter(data=>(data.event_name.toLowerCase()).includes(this.search_term.toLowerCase()));
      console.log(this.events);
      this.es.filterUpdate.next(this.events);
  }

}
