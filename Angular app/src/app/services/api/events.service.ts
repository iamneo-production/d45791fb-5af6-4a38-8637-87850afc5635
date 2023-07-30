import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRESTService } from './appRESTService';
import { Event } from '../../models/event';
import { catchError, tap } from 'rxjs';

interface EventInput {
  Name: string;
  Description: string;
  City: string;
  State: string;
  Zipcode: number;
  StartDate: string;
  EndDate: string;
  Capacity: number;
  EventType: string;
  Price: number;
  OrganizerId: number;
}

@Injectable({
  providedIn: 'root',
})
export class EventsService extends AppRESTService {
  API_URL: string = '/api/events';

  constructor(private http: HttpClient) {
    super();
  }
  getEvents() {
    return this.http
      .get<Event[]>(this.API_URL)
      .pipe(tap(), catchError(this.handleError));
  }

  getEvent(id: number) {
    return this.http
      .get<Event>(`${this.API_URL}/${id}`)
      .pipe(tap(), catchError(this.handleError));
  }

  getEventsByEventType(type: string) {
    return this.http
      .get<Event[]>(`${this.API_URL}?EventType=${type}`)
      .pipe(tap(), catchError(this.handleError));
  }

  //Add an event
  //requires following fields to create
  addEvent(input: EventInput) {
    return this.http
      .post(`${this.API_URL}`, input)
      .pipe(tap(), catchError(this.handleError));
  }
}
