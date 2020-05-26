import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptiableListComponent } from './emptiable-list.component';

describe('EmptiableListComponent', () => {
  let component: EmptiableListComponent;
  let fixture: ComponentFixture<EmptiableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptiableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptiableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
