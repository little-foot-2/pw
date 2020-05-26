import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransferWizardStepToComponent } from './make-transfer-wizard-step-to.component';

describe('MakeTransferWizardStepToComponent', () => {
  let component: MakeTransferWizardStepToComponent;
  let fixture: ComponentFixture<MakeTransferWizardStepToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransferWizardStepToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferWizardStepToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
