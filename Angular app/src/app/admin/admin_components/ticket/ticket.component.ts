import { Component } from '@angular/core';
import { TicketService } from '../../admin_services/a-ticket.service';
import { ticket } from '../../admin_interfaces/a-ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

    tickets:ticket[];
    constructor(private ts:TicketService){

    }
    ngOnInit(){
      this.ts.getTickets().subscribe(d=>{console.log(d);
      this.tickets=d},err=>console.log(err));
      this.ts.filteredData.subscribe(data=>{this.tickets=data;console.log("Data has changed "+data)});
    }
    
   reset(){
    this.ts.filteredData.next(this.tickets);
  }
    
}
