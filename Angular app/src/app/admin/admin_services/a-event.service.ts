import { Subject } from "rxjs";
import { event } from "../admin_interfaces/a-event";

export class EventService{
    
    filterUpdate=new Subject<event[]>();
    events:event[]=[
        {event_id:1,event_name:'Musical Event',organizer_id:3,start_date:'2023-05-14',end_date:'2023-05-15',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:2,event_name:'Cyber Awarness Event',organizer_id:4,start_date:'2023-06-14',end_date:'2023-06-15',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:102},
        {event_id:3,event_name:'Seminar Event',organizer_id:6,start_date:'2023-05-22',end_date:'2023-05-23',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:4,event_name:'DJ Event',organizer_id:1,start_date:'2023-05-11',end_date:'2023-05-11',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:5,event_name:'Marriage Event',organizer_id:14,start_date:'2023-01-14',end_date:'2023-01-16',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100},
        {event_id:6,event_name:'Fest Event',organizer_id:13,start_date:'2023-07-25',end_date:'2023-07-27',organizer_name:'Yuvan',event_desc:'Its a fantasitc musical Event its a concert like a show that has the live performance by the singers',cost:700,location:'Chennai Marina',capacity:200,register:100}
    ];

    getEvents(){
        return this.events;
    }

    getEventById(id:number){
        if(id<=0)
        return this.events[0];
        else return this.events[id-1];
    }
}