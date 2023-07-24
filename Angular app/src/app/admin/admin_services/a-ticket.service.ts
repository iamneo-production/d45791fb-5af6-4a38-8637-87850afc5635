import { Subject } from "rxjs";
import { ticket } from "../admin_interfaces/a-ticket";

export class TicketService{
    filteredData=new Subject<ticket[]>();
    tickets:ticket[]=[
        {ticket_id:1,event_id:9,date_of_booking:'2023-05-12',payment_id:6,attendee_id:1,cost:2000,status:'success'},
        {ticket_id:3,event_id:7,date_of_booking:'2023-06-12',payment_id:1,attendee_id:2,cost:500,status:'success'},
        {ticket_id:2,event_id:2,date_of_booking:'2023-05-21',payment_id:2,attendee_id:3,cost:200,status:'failed'},
        {ticket_id:4,event_id:6,date_of_booking:'2023-05-01',payment_id:7,attendee_id:4,cost:600,status:'failed'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:2,event_id:2,date_of_booking:'2023-05-21',payment_id:2,attendee_id:3,cost:200,status:'failed'},
        {ticket_id:2,event_id:2,date_of_booking:'2023-05-21',payment_id:2,attendee_id:3,cost:200,status:'failed'},
        {ticket_id:2,event_id:2,date_of_booking:'2023-05-21',payment_id:2,attendee_id:3,cost:200,status:'failed'},
        {ticket_id:2,event_id:2,date_of_booking:'2023-05-21',payment_id:2,attendee_id:3,cost:200,status:'failed'},
        {ticket_id:2,event_id:2,date_of_booking:'2023-05-21',payment_id:2,attendee_id:3,cost:200,status:'failed'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:5,event_id:3,date_of_booking:'2023-03-12',payment_id:5,attendee_id:5,cost:1000,status:'success'},
        {ticket_id:6,event_id:4,date_of_booking:'2023-04-20',payment_id:3,attendee_id:6,cost:300,status:'failed'},
    ];

    getTickets(){
        return this.tickets;
    }

    getTicketById(id:number):ticket{
        let nullTicket:ticket={ticket_id:0,event_id:0,attendee_id:0,payment_id:0,date_of_booking:'',cost:0,status:''};
        console.log(id);
        this.tickets.forEach((data)=>{
            if(data.ticket_id==id){
                console.log(data);
                nullTicket=data;
            }
            return nullTicket;
        });
        return nullTicket;
    }
}