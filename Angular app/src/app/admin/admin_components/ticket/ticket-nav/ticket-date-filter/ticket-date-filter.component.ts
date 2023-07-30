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
  filteredData:any[];
  tickets:any[];
  constructor(private ts:TicketService ){
    ts.getTickets().subscribe(d=>this.tickets=d,err=>console.log(err));;
  }
  filterType:string='default';

  status_mode='default';

   filterIt(){
    if(this.startDate==''||this.startDate===undefined||this.endDate===undefined||this.endDate==='')
    this.ts.filteredData.next(this.tickets);
    else{
        const st=new Date(this.startDate);
        const ed=new Date(this.endDate);
        console.log(st+"    "+ed);
        
        this.filteredData=this.tickets.filter(filteredData=> new Date(filteredData.event.startDate)>=st && new Date(filteredData.event.startDate)<=ed);
        console.log(this.filteredData);
        this.ts.filteredData.next(this.filteredData);
    }
   }
   sort(){
    let btn=document.getElementById('status_btn');
    if(this.status_mode==='default'){
      this.status_mode='booked';
      btn.textContent=this.status_mode;
      this.ts.filteredData.next(this.filteredData=this.tickets.filter(data=>data.status==='booked'));
    }
    else if(this.status_mode==='booked'){
      this.status_mode='failed';
      btn.textContent=this.status_mode;
      this.ts.filteredData.next(this.filteredData=this.tickets.filter(data=>data.status==='failed'));
    }
    else if(this.status_mode==='failed'){
      this.status_mode='booked';
      btn.textContent=this.status_mode;
      this.ts.filteredData.next(this.filteredData=this.tickets.filter(data=>data.status==='booked'));

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