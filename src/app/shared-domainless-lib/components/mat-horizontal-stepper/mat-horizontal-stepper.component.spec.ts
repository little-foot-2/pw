import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatHorizontalStepperComponent } from './mat-horizontal-stepper.component';

describe('MatHorizontalStepperComponent', () => {
  let component: MatHorizontalStepperComponent;
  let fixture: ComponentFixture<MatHorizontalStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatHorizontalStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatHorizontalStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
