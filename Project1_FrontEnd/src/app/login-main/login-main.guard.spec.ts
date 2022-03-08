import { TestBed } from '@angular/core/testing';

import { LoginMainGuard } from './login-main.guard';

describe('LoginMainGuard', () => {
  let guard: LoginMainGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginMainGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
