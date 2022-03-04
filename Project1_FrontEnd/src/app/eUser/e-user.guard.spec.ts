import { TestBed } from '@angular/core/testing';

import { EUserGuard } from './e-user.guard';

describe('EUserGuard', () => {
  let guard: EUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
