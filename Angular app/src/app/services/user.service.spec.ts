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
});
