import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderForLandingComponent } from './page-header-for-landing.component';

describe('PageHeaderForLandingComponent', () => {
  let component: PageHeaderForLandingComponent;
  let fixture: ComponentFixture<PageHeaderForLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderForLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderForLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
