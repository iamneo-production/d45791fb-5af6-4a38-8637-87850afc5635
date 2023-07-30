import { Component,EventEmitter,Input,Output } from '@angular/core';
import { TicketsService } from 'src/app/services/api/tickets.service';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-upcomingevents',
  templateUrl: './upcomingevents.component.html',
  styleUrls: ['./upcomingevents.component.css']
})
export class UpcomingeventsComponent {

  constructor(private ticketService : TicketsService, private userService: UserService) {}

  userDetails : any;

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('user'));
    this.getAttendeeDetails(this.userDetails.id);
  }


  @Input()
  upcomingevent : any;
  @Output()
  changeevent =new EventEmitter<any>();
  cancelEvent(bookingId: string,index:number) {
    console.log(bookingId,index);
    console.log(this.upcomingevent[index]);
    let event=this.upcomingevent[index];
    event.paymentStatus="Refundstatus";
    let upcomingeventcopy=this.upcomingevent;
    upcomingeventcopy[index]=event;
    this.changeevent.emit(upcomingeventcopy);

    // Logic to cancel the event with the provided bookingId
    // You can remove the cancelled event from the `upcomingBookings` array or perform any other desired action
  }

  attendeelist : any;
  upcomingeventslist : any = [];
  

  async getAttendeeDetails(id) {


    try {
      const res = await this.userService.getAttendeeDetails(id).toPromise();
      this.attendeelist = res;
      console.log(this.attendeelist);
    } catch (err) {
      console.log(err);
    }

    
    this.getUpcomingEvent();
  }

  getUpcomingEvent() {
    let upcomingeventlist = [];
    this.attendeelist.forEach(async (data : any) => {
      let ticket : any = await this.ticketService.getTicketsByAttendee(data.id).toPromise();
      if(this.isFutureEvent(ticket[0]) && ticket[0].status !== "cancelled") {
        upcomingeventlist.push(ticket[0]);
      }
    });
    this.upcomingeventslist = upcomingeventlist;
    console.log(this.upcomingeventslist);
    
  }

  isFutureEvent(ticket : any) : boolean {
    let currentDate: Date = new Date();
    let eventdate: Date = new Date(ticket.event.startDate);
    if(eventdate > currentDate){
        return true;
    }
    return false;
  }

  cancelTicket(id : number , ticket : any) {
    ticket.status = "cancelled";
    console.log(id, ticket);
    this.ticketService.updateTicketStatusById(id,ticket).subscribe(
      {
        next : (res) => {
          console.log(res);
        },
        error : (err) => {
          console.log(err);
        }
      }
    )
  }
  
}
