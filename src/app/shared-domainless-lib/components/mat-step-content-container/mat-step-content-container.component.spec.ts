import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStepContentContainerComponent } from './mat-step-content-container.component';

describe('MatStepContentContainerComponent', () => {
  let component: MatStepContentContainerComponent;
  let fixture: ComponentFixture<MatStepContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatStepContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatStepContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
