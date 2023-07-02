import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { orgainzerGuard } from './orgainzer.guard';

describe('orgainzerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => orgainzerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
