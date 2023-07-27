import { Component ,Input} from '@angular/core';
import { TicketsService } from 'src/app/services/api/tickets.service';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-cancelledevents',
  templateUrl: './cancelledevents.component.html',
  styleUrls: ['./cancelledevents.component.css']
})
export class CancelledeventsComponent {
  @Input()
  cancelledevent:any;


  
constructor(private ticketService : TicketsService, private userService: UserService) {}

userDetails : any;

ngOnInit() {
  this.userDetails = JSON.parse(localStorage.getItem('user'));
  this.getAttendeeDetails(this.userDetails.id);
}


attendeelist : any;
canceleventslist : any = [];


  async getAttendeeDetails(id) {


    try {
      const res = await this.userService.getAttendeeDetails(id).toPromise();
      this.attendeelist = res;
      console.log(this.attendeelist);
    } catch (err) {
      console.log(err);
    }

    
    this.getPastEvent();
  }

  async getPastEvent() {
    let cancelevent = [];
    this.attendeelist.forEach(async (data : any) => {
      
      let ticket : any = await this.ticketService.getTicketsByAttendee(data.id).toPromise();
      if(ticket[0].status === "cancelled") {
        cancelevent.push(ticket[0]);
      }
    });
    this.canceleventslist = cancelevent;
    console.log(this.canceleventslist);
    
  }

}
