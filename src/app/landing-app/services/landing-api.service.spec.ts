import { TestBed } from '@angular/core/testing';

import { LandingApiService } from './landing-api.service';

describe('LandingApiService', () => {
  let service: LandingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
