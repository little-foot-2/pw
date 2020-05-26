import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserInfoComponent } from './header-user-info.component';

describe('HeaderUserInfoComponent', () => {
  let component: HeaderUserInfoComponent;
  let fixture: ComponentFixture<HeaderUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
