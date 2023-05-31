import { TestBed } from '@angular/core/testing';

import { TicketsService } from './tickets.service';
import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('TicketsService', () => {
  let service: TicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(BackendService, {
          delay: 0,
        }),
      ],
      providers: [BackendService],
    });
    service = TestBed.inject(TicketsService);
  });

  it('should return a ticket based on id', async () => {
    const ticketID = 1;

    service.getTicket(ticketID).subscribe((data) => {
      expect(data.TicketID).toBe(ticketID);
    });
  });

  it('should get tickets by userId', async () => {
    const userID = 1;

    service.getTicketsByUser(userID).subscribe((data) => {
      expect(data[0].ParticipantID).toBe(userID);
    });
  });

  it('should add a ticket', async () => {
    const input = {
      ParticipantID: 1,
      EventId: 1,
      Availabilty: 83,
      Price: 1200,
      TicketCount: 23,
      Type: 'sadhsdfh',
    };

    service.getTickets().subscribe((data) => {
      const ini = data.length;
      service.addTicket(input).subscribe(() => {
        service.getTickets().subscribe((data) => {
          expect(data[data.length - 1].TicketID).toBe(ini + 1);
        });
      });
    });
  });
});
