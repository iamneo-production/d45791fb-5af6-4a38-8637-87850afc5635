import { Injectable } from '@angular/core';
import { appRESTService } from './appRESTService';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketsService implements appRESTService {
  API_URL = '/api/tickets';

  constructor(private http: HttpClient) {}

  getTicket(id: number) {
    return this.http.get<Ticket>(`${this.API_URL}/${id}`);
  }
}
