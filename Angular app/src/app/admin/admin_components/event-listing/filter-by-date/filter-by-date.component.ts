import { Component,Input } from '@angular/core';
import { Event } from '../../../../models/event';
import { EventService } from '../../../admin_services/a-event.service';

@Component({
  selector: 'app-filter-by-date',
  templateUrl: './filter-by-date.component.html',
  styleUrls: ['./filter-by-date.component.css']
})
export class FilterByDateComponent {
    startDate='';
    endDate='';
    filteredData:Event[];
    events:Event[];
    constructor(private es:EventService){
      es.getEvents().subscribe((Response:Event[])=>{
        console.log(Response);
        this.events=[...Response].filter((data)=>{
            return data.organiser!=null;
        });
    },error=>
        console.log(error)
    );;
    }

    filterIt(){
      if(this.startDate==''||this.startDate===undefined||this.endDate===''||this.endDate===undefined)
        this.es.filterUpdate.next(this.events);
      else{
          const st=new Date(this.startDate);
          const ed=new Date(this.endDate);
          this.filteredData=this.events.filter(filteredData=> new Date(filteredData.endDate)>=st && new Date(filteredData.startDate)<=ed);
          console.log(this.filteredData);
          this.es.filterUpdate.next(this.filteredData);
      }
    }
    reset(){
      this.startDate='';
      this.endDate='';
      this.es.filterUpdate.next(this.events);
    }
}
