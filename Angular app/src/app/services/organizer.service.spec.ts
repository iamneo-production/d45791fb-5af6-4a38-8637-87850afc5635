import { TestBed } from '@angular/core/testing';

import { OrganizerService } from './organizer.service';
import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('OrganiserService', () => {
  let service: OrganizerService;

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
    service = TestBed.inject(OrganizerService);
  });

  it('should return a ticket  based on id', async () => {
    const organizerID = 1;

    service.getOrganiser(organizerID).subscribe((data) => {
      expect(data.OrganizerId).toBe(organizerID);
    });
  });
});
