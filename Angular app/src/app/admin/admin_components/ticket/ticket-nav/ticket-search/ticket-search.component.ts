import { Component } from '@angular/core';
import { ticket } from '../../../../admin_interfaces/a-ticket';
import { TicketService } from '../../../../admin_services/a-ticket.service';

@Component({
  selector: 'app-ticket-search',
  templateUrl: './ticket-search.component.html',
  styleUrls: ['./ticket-search.component.css']
})
export class TicketSearchComponent {
  tickets:ticket[];
  search_term:number;
  constructor(private ts:TicketService){
    
  }

  search(){
    this.tickets=[];
    if(this.search_term===undefined)
    return;
    this.tickets.push(this.ts.getTicketById(this.search_term));
    console.log("data produced by search iss "+this.tickets);
    this.ts.filteredData.next(this.tickets);
   }
}

