import { TestBed } from '@angular/core/testing';

import { AppUrlsService } from './app-urls.service';

describe('AppUrlsService', () => {
  let service: AppUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
