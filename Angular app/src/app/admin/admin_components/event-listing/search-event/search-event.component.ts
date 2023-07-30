import { Component } from '@angular/core';
import { Event } from '../../../../models/event';
import { EventService } from '../../../admin_services/a-event.service';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})
export class SearchEventComponent {

  events:Event[];
  search_term:string;
  constructor(private es:EventService){
    
  }

  search() {
    this.es.getEvents().subscribe((response: Event[]) => {
      console.log(response);
      console.log(this.search_term);
      
      this.events = [...response].filter((data) => {
        return data.organiser != null && data.name.toLowerCase().includes(this.search_term.toLowerCase());
      });
      this.es.filterUpdate.next(this.events);
    }, error => {
      console.log(error);
    });
  }
  }

