import { TestBed } from '@angular/core/testing';

import { ErrorTypeCheckerService } from './error-type-checker.service';

describe('ErrorTypeCheckerService', () => {
  let service: ErrorTypeCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorTypeCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
