import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BackendService } from './backend.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('EventsService', () => {
  let service: EventsService;

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
    service = TestBed.inject(EventsService);
  });

  it('should return all events', async () => {
    service.getEvents().subscribe((data) => {
      expect(data).toHaveSize(2);
    });
  });

  it('should return an event based on id', async () => {
    const eventID = 1;

    service.getEvent(eventID).subscribe((data) => {
      expect(data.EventID).toBe(eventID);
    });
  });
});
