import { TestBed } from '@angular/core/testing';

import { GetUserInfoGuard } from './get-user-info.guard';

describe('GetUserInfoGuard', () => {
  let guard: GetUserInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GetUserInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
