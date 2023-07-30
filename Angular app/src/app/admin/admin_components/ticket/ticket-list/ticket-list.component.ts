import { Component, Input } from '@angular/core';
import { ticket } from '../../../admin_interfaces/a-ticket';
import { TicketService } from 'src/app/admin/admin_services/a-ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  @Input() ticket:any;
  
constructor(private ts:TicketService){}

  getColorByStatus(){
    if(this.ticket.status==='booked')
      return true;
    else
      return false;
  }

  delete(){
    this.ts.deleteTicket(this.ticket.id).subscribe(d=>{console.log(d);
    this.ts.getTickets().subscribe(d=>this.ts.filteredData.next(d))},err=>console.log(err));
  }

}