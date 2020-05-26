import { TestBed } from '@angular/core/testing';

import { LandingThemeService } from './landing-theme.service';

describe('LandingThemeService', () => {
  let service: LandingThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
