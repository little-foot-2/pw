import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransferContainerComponent } from './make-transfer-container.component';

describe('MakeTransferContainerComponent', () => {
  let component: MakeTransferContainerComponent;
  let fixture: ComponentFixture<MakeTransferContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransferContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
