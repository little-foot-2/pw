import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterForLandingComponent } from './page-footer-for-landing.component';

describe('PageFooterForLandingComponent', () => {
  let component: PageFooterForLandingComponent;
  let fixture: ComponentFixture<PageFooterForLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFooterForLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFooterForLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
