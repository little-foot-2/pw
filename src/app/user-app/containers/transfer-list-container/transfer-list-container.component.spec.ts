import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferListContainerComponent } from './transfer-list-container.component';

describe('TransferListContainerComponent', () => {
  let component: TransferListContainerComponent;
  let fixture: ComponentFixture<TransferListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
