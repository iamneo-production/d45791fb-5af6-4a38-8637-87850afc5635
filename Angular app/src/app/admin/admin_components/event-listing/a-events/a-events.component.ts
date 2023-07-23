import { Component ,Input} from '@angular/core';
import { Route, Router } from '@angular/router';
import { Event } from '../../../../models/event';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-a-events',
  templateUrl: './a-events.component.html',
  styleUrls: ['./a-events.component.css'],
  providers:[DatePipe]
})
export class AEventsComponent {

  @Input() event:Event;
  constructor(private router:Router){
  }
  gotoEventDetails(){
    this.router.navigate(['admin/manage-events',this.event.id]);
  }
  gotoReport(){
    this.router.navigate(['admin/report',this.event.id]);
  }
}

