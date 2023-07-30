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

  it('should return events based on category', async () => {
    const eventType = 'Seminar';

    service.getEventsByEventType(eventType).subscribe((data) => {
      expect(data).toHaveSize(1);
    });
  });

  it('should add an event ', async () => {
    const input = {
      Capacity: 15000,
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tincidunt lacinia. Nam in feugiat tortor. Curabitur nec ligula non quam interdum malesuada. Phasellus posuere rutrum commodo. Nam congue orci sed nulla vulputate faucibus fermentum nec metus. Cras maximus nulla laoreet odio maximus elementum. In a ultrices eros. Donec et purus sapien. Morbi et nibh dignissim, mollis ex et, consequat massa. Morbi ut hendrerit diam, in efficitur velit. Fusce in risus metus. Duis porta, ex ut varius posuere, ex diam semper metus, a laoreet nisi nisi eu neque. In ut ultrices justo, vitae ullamcorper nulla.',
      Name: 'Lorem Ipsum',
      City: 'Kolkata',
      Price: 1200,
      EventType: 'Seminar',
      State: 'West Bengal',
      OrganizerId: 1,
      Zipcode: 700141,
      StartDate: new Date(2023, 8, 28, 18, 30).toISOString(),
      EndDate: new Date(2023, 8, 28, 20, 30).toISOString(),
    };

    service.getEvents().subscribe((data) => {
      const ini = data.length;

      service.addEvent(input).subscribe(() => {
        service.getEvents().subscribe((data) => {
          expect(data[data.length - 1].EventID).toBe(ini + 1);
        });
      });
    });
  });
});
