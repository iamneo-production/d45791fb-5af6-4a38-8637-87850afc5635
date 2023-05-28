import { Component, OnInit, OnChanges } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  private events: Event[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((events) => {
      this.events = events as Event[];
    });
  }
}
