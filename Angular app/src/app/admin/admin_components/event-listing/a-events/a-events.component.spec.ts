import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEventsComponent } from './a-events.component';

describe('AEventsComponent', () => {
  let component: AEventsComponent;
  let fixture: ComponentFixture<AEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AEventsComponent]
    });
    fixture = TestBed.createComponent(AEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
