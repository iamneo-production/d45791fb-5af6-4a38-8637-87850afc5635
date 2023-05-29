import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.eventsService.getEvent(+id).subscribe((event) => {
        console.log(event);
      });
  }
}
