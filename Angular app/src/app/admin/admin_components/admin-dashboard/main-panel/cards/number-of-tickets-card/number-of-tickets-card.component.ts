import { Component } from '@angular/core';
import { TicketService } from 'src/app/admin/admin_services/a-ticket.service';

@Component({
  selector: 'app-number-of-tickets-card',
  templateUrl: './number-of-tickets-card.component.html',
  styleUrls: ['./number-of-tickets-card.component.css']
})
export class NumberOfTicketsCardComponent {

  totalTickets:number;

  constructor(private ts:TicketService){
    ts.getTickets().subscribe(d=>{this.totalTickets=d.length},err=>console.log(err));
  }
  

}