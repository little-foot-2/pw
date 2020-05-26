import { TestBed } from '@angular/core/testing';

import { BreakpointsObserverService } from './breakpoints-observer.service';

describe('BreakpointsObserverService', () => {
  let service: BreakpointsObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakpointsObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
