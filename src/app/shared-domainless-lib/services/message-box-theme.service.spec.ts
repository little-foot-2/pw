import { TestBed } from '@angular/core/testing';

import { MessageBoxThemeService } from './message-box-theme.service';

describe('MessageBoxThemeService', () => {
  let service: MessageBoxThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBoxThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
