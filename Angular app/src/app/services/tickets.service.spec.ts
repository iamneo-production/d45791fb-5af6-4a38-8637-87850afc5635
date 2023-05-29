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
});
