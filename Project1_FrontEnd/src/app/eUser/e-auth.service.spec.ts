import { TestBed } from '@angular/core/testing';

import { EAuthService } from './e-auth.service';

describe('EAuthService', () => {
  let service: EAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
