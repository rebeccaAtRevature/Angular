import { TestBed } from '@angular/core/testing';

import { MAuthService } from './m-auth.service';

describe('MAuthService', () => {
  let service: MAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
