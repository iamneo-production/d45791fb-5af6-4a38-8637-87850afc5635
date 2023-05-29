import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('AdminService', () => {
  let service: AdminService;

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
    service = TestBed.inject(AdminService);
  });

  it('should get the admin based on id', async () => {
    service.getAdmin(1).subscribe((data) => {
      const adminID = 1;

      expect(data.AdminID).toBe(1);
    });
  });
});
