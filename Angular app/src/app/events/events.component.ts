import { Component,Output,EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { arrow } from '@popperjs/core';
import { EventsService } from '../services/event-service/events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  @Output() event = new EventEmitter<string>()

  events: any[] = [
   
    // Add more events...
  ]; 
  eventsNotFound: boolean = false;


  searchText: string='';
  temp: any[]=this.events;

  constructor(private router: Router,@Inject(EventsService) private eventser: EventsService) {
    
  }
  
  ngOnInit(){
    this.eventser.getAllEvents().forEach((data)=> this.events.push(data));
    //console.log(events);
    //this.events=events;
  }

  onSearchTexEntered(searchValue: string){
    this.searchText = searchValue.toLowerCase();
    let array = []
    //console.log(this.searchText);
    for(let i=0;i<this.events.length;i++){
      const eventName = this.events[i].name.toLowerCase();
      const startDate = this.events[i].start_date.toLowerCase();


      if(eventName.includes(this.searchText) || startDate.includes(this.searchText)){
        array.push(this.events[i]);
      // console.log(this.events[i].name);
      }
    }

    if (array.length === 0) {
      // No events found
      this.eventsNotFound = true;
    } else {
      // Events found
      this.eventsNotFound = false;
    }
    console.log(array);
    this.temp=array;
  }
  
  redirectToEventDetails(id:any): void {
    console.log(id);
    this.router.navigate(['/event-details/'+id]);
  }
  }
