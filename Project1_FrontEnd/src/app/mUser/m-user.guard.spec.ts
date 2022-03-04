import { TestBed } from '@angular/core/testing';

import { MUserGuard } from './m-user.guard';

describe('MUserGuard', () => {
  let guard: MUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
