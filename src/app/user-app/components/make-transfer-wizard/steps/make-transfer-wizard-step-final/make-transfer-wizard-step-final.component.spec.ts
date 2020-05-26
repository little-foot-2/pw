import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransferWizardStepFinalComponent } from './make-transfer-wizard-step-final.component';

describe('MakeTransferWizardStepFinalComponent', () => {
  let component: MakeTransferWizardStepFinalComponent;
  let fixture: ComponentFixture<MakeTransferWizardStepFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransferWizardStepFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferWizardStepFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
