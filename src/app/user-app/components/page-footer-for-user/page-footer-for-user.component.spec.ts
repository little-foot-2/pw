import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterForUserComponent } from './page-footer-for-user.component';

describe('PageFooterForUserComponent', () => {
  let component: PageFooterForUserComponent;
  let fixture: ComponentFixture<PageFooterForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFooterForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFooterForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
