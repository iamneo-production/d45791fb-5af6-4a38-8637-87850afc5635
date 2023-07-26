import { Injectable } from '@angular/core';
import { AppRESTService } from './appRESTService';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../models/ticket';
import { catchError, tap } from 'rxjs';

// interface TicketInput {
//   EventId: number;
//   ParticipantID: number;
//   Availabilty: number;
//   Type: string;
//   Price: number;
//   TicketCount: number;
// }

interface TicketInput {
  status:string;
  price:number;
}

@Injectable({
  providedIn: 'root',
})
export class TicketsService extends AppRESTService {
  API_URL = `${localStorage.getItem("BASE_URL")}`;

  constructor(private http: HttpClient) {
    super();
  }

  getTicket(id: number) {
    return this.http
      .get<Ticket>(`${this.API_URL}/${id}`)
      .pipe(tap(), catchError(this.handleError));
  }

  getTickets() {
    return this.http
      .get<Ticket[]>(this.API_URL)
      .pipe(tap(), catchError(this.handleError));
  }

  addTicket(input: TicketInput) {
    return this.http
      .post(this.API_URL, input)
      .pipe(tap(), catchError(this.handleError));
  }

  getTicketsByUser(userID: number) {
    return this.http
      .get<Ticket[]>(`${this.API_URL}?ParticipantID=${userID}`)
      .pipe(tap(), catchError(this.handleError));
  }
}
