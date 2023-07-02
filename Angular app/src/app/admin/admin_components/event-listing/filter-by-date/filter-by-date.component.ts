import { Component,Input } from '@angular/core';
import { event } from '../../../admin_interfaces/a-event';
import { EventService } from '../../../admin_services/a-event.service';

@Component({
  selector: 'app-filter-by-date',
  templateUrl: './filter-by-date.component.html',
  styleUrls: ['./filter-by-date.component.css']
})
export class FilterByDateComponent {
    startDate='';
    endDate='';
    filteredData:event[];
    events:event[];
    constructor(private es:EventService){
      this.events=es.getEvents();
    }

    filterIt(){
      if(this.startDate==''||this.startDate===undefined||this.endDate===''||this.endDate===undefined)
        this.es.filterUpdate.next(this.events);
      else{
          const st=new Date(this.startDate);
          const ed=new Date(this.endDate);
          this.filteredData=this.events.filter(filteredData=> new Date(filteredData.start_date)>=st && new Date(filteredData.start_date)<=ed);
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
