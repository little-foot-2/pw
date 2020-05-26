import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteProgressBarComponent } from './infinite-progress-bar.component';

describe('InfiniteProgressBarComponent', () => {
  let component: InfiniteProgressBarComponent;
  let fixture: ComponentFixture<InfiniteProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
