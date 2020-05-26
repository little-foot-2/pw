import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransferWizardStepAmountComponent } from './make-transfer-wizard-step-amount.component';

describe('MakeTransferWizardStepAmountComponent', () => {
  let component: MakeTransferWizardStepAmountComponent;
  let fixture: ComponentFixture<MakeTransferWizardStepAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransferWizardStepAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferWizardStepAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
