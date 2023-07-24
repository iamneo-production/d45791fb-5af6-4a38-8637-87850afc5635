import { Component } from '@angular/core';
import { ticket } from '../../../../admin_interfaces/a-ticket';
import { TicketService } from '../../../../admin_services/a-ticket.service';

@Component({
  selector: 'app-ticket-date-filter',
  templateUrl: './ticket-date-filter.component.html',
  styleUrls: ['./ticket-date-filter.component.css']
})
export class TicketDateFilterComponent {
  startDate='';
  endDate='';
  filteredData:ticket[];
  tickets:ticket[];
  constructor(private ts:TicketService ){
    this.tickets=ts.getTickets();
  }
  filterType:string='default';

  status_mode='default';

   filterIt(){
    if(this.startDate==''||this.startDate===undefined||this.endDate===undefined||this.endDate==='')
    this.ts.filteredData.next(this.tickets);
    else{
        const st=new Date(this.startDate);
        const ed=new Date(this.endDate);
        this.filteredData=this.tickets.filter(filteredData=> new Date(filteredData.date_of_booking)>=st && new Date(filteredData.date_of_booking)<=ed);
        console.log(this.filteredData);
        this.ts.filteredData.next(this.filteredData);
    }
   }
   sort(){
    let btn=document.getElementById('status_btn');
    if(this.status_mode==='default'){
      this.status_mode='success';
      btn.textContent=this.status_mode;
      this.ts.filteredData.next(this.filteredData=this.tickets.filter(data=>data.status==='success'));
    }
    else if(this.status_mode==='success'){
      this.status_mode='failed';
      btn.textContent=this.status_mode;
      this.ts.filteredData.next(this.filteredData=this.tickets.filter(data=>data.status==='failed'));
    }
    else if(this.status_mode==='failed'){
      this.status_mode='success';
      btn.textContent=this.status_mode;
      this.ts.filteredData.next(this.filteredData=this.tickets.filter(data=>data.status==='success'));

    }

   }

   filterby(type:string){
    this.filterType=type;
   }
   reset(){
    this.startDate='';
    this.endDate=''
    this.status_mode='default';
    document.getElementById('status_btn').textContent=this.status_mode;
    this.ts.filteredData.next(this.tickets);
  }
}