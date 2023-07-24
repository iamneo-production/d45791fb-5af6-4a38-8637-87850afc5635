import { Component ,Input} from '@angular/core';
import { Route, Router } from '@angular/router';
import { Event } from '../../../../models/event';
import { DatePipe } from '@angular/common';
import { EventService } from 'src/app/admin/admin_services/a-event.service';

@Component({
  selector: 'app-a-events',
  templateUrl: './a-events.component.html',
  styleUrls: ['./a-events.component.css'],
  providers:[DatePipe]
})
export class AEventsComponent {

  @Input() event:Event;
  constructor(private router:Router,private es:EventService){
  }
  gotoEventDetails(){
    this.router.navigate(['admin/manage-events',this.event.id]);
  }
  gotoReport(){
    this.router.navigate(['admin/report',this.event.id]);
  }

  deleteEvent(){
    this.es.deleteEvent(this.event.id).subscribe(data=>{
      this.es.getEvents().subscribe(data=>
        this.es.filterUpdate.next(data.filter(data=>data.organiser!=null)),err=>console.log(err)
        );
      this.es.DeleteUpdate.next(true);
      setInterval(()=>this.es.DeleteUpdate.next(false),3000);
    })
  }
}

