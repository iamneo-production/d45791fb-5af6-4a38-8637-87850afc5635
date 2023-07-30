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

  it('should return a user based on email and password', async () => {
    const email = 'gf83@gmail.com';
    const password = 'sdhsfjsd';

    service
      .getOrganizerByEmailAndPassword(email, password)
      .subscribe((data) => {
        expect(data).toBeTruthy();
        expect(data.Email).toBe(email);
      });
  });

  it('should add a new organizer', async () => {
    const input = {
      Email: 'jh93@gmail.com',
      Password: 'sdhsfjsd',
      Contact_No: '247374384',
      Name: 'Robert Halford',
    };

    service.addOrganizer(input).subscribe(() => {
      service
        .getOrganizerByEmailAndPassword(input.Email, input.Password)
        .subscribe((user) => {
          console.log(user);
          expect(user.Email).toBe(input.Email);
        });
    });
  });
});
