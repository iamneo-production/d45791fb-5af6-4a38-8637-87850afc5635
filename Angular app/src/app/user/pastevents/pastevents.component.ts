import { Component,Input,OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/api/tickets.service';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-pastevents',
  templateUrl: './pastevents.component.html',
  styleUrls: ['./pastevents.component.css']
})
export class PasteventsComponent implements OnInit{
// @Input()
// pastevent :any;
// pasteventrecord(){
//   let pastrecord:any[]=[]
//   for(let i=0;i<this.pastevent.length;i++)
//   {
//      console.log(this.pastevent[i]);
//      let currentDate: Date = new Date();
//   let eventdate: Date = new Date(this.pastevent[i].date);
//   if(eventdate < currentDate){
//       console.log(true);
//       pastrecord.push(this.pastevent[i]);
//   }
//   else {
//     console.log(false);
//   }
//   }
//   return pastrecord;
// }
// pastrecord:any[] =[]
// ngOnInit(){
//   this.pastrecord=this.pasteventrecord();
// }

constructor(private ticketService : TicketsService, private userService: UserService) {}

userDetails : any;

ngOnInit() {
  this.userDetails = JSON.parse(localStorage.getItem('user'));
  this.getAttendeeDetails(this.userDetails.id);
}


attendeelist : any;
pasteventslist : any = [];


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
    let pastevent = [];
    this.attendeelist.forEach(async (data : any) => {
      
      let ticket = await this.ticketService.getTicketsByAttendee(data.id).toPromise();
      if(this.isPastEvent(ticket[0])) {
        pastevent.push(ticket[0]);
      }
    });
    this.pasteventslist = pastevent;
    console.log(this.pasteventslist);
    
  }

  isPastEvent(ticket : any) : boolean {
    let currentDate: Date = new Date();
    let eventdate: Date = new Date(ticket.event.startDate);
    if(eventdate < currentDate){
        return true;
    }
    return false;
  }
}
