import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderForUserComponent } from './page-header-for-user.component';

describe('PageHeaderForUserComponent', () => {
  let component: PageHeaderForUserComponent;
  let fixture: ComponentFixture<PageHeaderForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
