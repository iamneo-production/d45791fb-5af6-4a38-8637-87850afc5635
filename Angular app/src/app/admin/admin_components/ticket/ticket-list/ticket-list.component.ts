import { Component, Input } from '@angular/core';
import { ticket } from '../../../admin_interfaces/a-ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  @Input() ticket:ticket;
  
  getColorByStatus(){
    if(this.ticket.status==='success')
      return true;
    else
      return false;
  }

}
