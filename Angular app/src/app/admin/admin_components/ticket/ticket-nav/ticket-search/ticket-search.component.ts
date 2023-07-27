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
  search_text:string;
  constructor(private ts:TicketService){
    
  }

  search(){
    this.tickets=[];
    console.log("i was called...."+this.search_text);
    this.ts.getTicketById(this.search_text).subscribe(data=>{this.tickets.push(data);
      this.ts.filteredData.next(this.tickets);},err=>console.log(err));
    console.log("data produced by search iss "+this.tickets);
   }
}