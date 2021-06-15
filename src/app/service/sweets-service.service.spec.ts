import { TestBed } from '@angular/core/testing';

import { SweetsServiceService } from './sweets-service.service';

describe('SweetsServiceService', () => {
  let service: SweetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
