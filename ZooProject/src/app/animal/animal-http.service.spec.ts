import { TestBed } from '@angular/core/testing';

import { AnimalHttpService } from './animal-http.service';

describe('AnimalHttpService', () => {
  let service: AnimalHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
