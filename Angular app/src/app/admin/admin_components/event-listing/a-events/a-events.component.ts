import { Component ,Input} from '@angular/core';
import { Route, Router } from '@angular/router';
import { event } from '../../../admin_interfaces/a-event';
import { EventService } from '../../../admin_services/a-event.service';

@Component({
  selector: 'app-a-events',
  templateUrl: './a-events.component.html',
  styleUrls: ['./a-events.component.css']
})
export class AEventsComponent {

  @Input() event:event;
  constructor(private router:Router){
  }
  gotoEventDetails(){
    this.router.navigate(['admin/manage-events',this.event.event_id]);
  }
  gotoReport(){
    this.router.navigate(['admin/report',this.event.event_id]);
  }
}

