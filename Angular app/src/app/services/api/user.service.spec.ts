import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('UserService', () => {
  let service: UserService;

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
    service = TestBed.inject(UserService);
  });

  it('should return a user based on id', async () => {
    const userID = 1;

    service.getUser(userID).subscribe((data) => {
      expect(data.ParticipantId).toBe(userID);
    });
  });

  it('should return a user based on email and password', async () => {
    const email = 'jh83@gmail.com';
    const password = 'sdhsfjsd';

    service.getUserByEmailAndPassword(email, password).subscribe((data) => {
      expect(data).toBeTruthy();
      expect(data.Email).toBe(email);
    });
  });

  it('should add a new user', async () => {
    const input = {
      Email: 'jh93@gmail.com',
      Password: 'sdhsfjsd',
      Contact_No: '247374384',
      Name: 'Robert Halford',
    };

    service.addUser(input).subscribe(() => {
      service
        .getUserByEmailAndPassword(input.Email, input.Password)
        .subscribe((user) => {
          console.log(user);
          expect(user.Email).toBe(input.Email);
        });
    });
  });
});
