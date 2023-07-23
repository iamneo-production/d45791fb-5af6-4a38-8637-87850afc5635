import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ticket } from '../../../../admin_interfaces/a-ticket';
import { TicketService } from '../../../../admin_services/a-ticket.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent {

  tickets:ticket[];

  constructor(private router:Router,private ts:TicketService){
  }

  ngOnInit(){
    this.tickets=this.ts.getTickets().reverse();
  }


  gotoTickets(){
    this.router.navigate(['admin/manage-tickets']);
  }
}
