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

  tickets:any[];

  constructor(private router:Router,private ts:TicketService){
  }

  ngOnInit(){
    this.ts.getTickets().subscribe(d=>{console.log(this.tickets);this.tickets=d.reverse()},err=>console.log(err));
  }


  gotoTickets(){
    this.router.navigate(['admin/manage-tickets']);
  }
}