import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appRESTService } from './appRESTService';

@Injectable({
  providedIn: 'root',
})
export class EventsService implements appRESTService {
  API_URL: string = '/api/events';

  constructor(private http: HttpClient) {}
  getEvents() {
    return this.http.get(this.API_URL);
  }

  getEvent(id: number) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}
