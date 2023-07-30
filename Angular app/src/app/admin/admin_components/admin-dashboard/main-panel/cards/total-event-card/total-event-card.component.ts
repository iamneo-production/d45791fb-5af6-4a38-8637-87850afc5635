import { Component } from '@angular/core';
import { EventService } from 'src/app/admin/admin_services/a-event.service';

@Component({
  selector: 'app-total-event-card',
  templateUrl: './total-event-card.component.html',
  styleUrls: ['./total-event-card.component.css']
})
export class TotalEventCardComponent {
  totalEvents:number;
  constructor(private es:EventService){}

  ngOnInit(){
    this.es.getEvents().subscribe(data=>this.totalEvents=data.length,err=>console.log(err));
  }

}
