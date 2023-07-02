import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdisplayComponent } from './eventdisplay.component';

describe('EventdisplayComponent', () => {
  let component: EventdisplayComponent;
  let fixture: ComponentFixture<EventdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventdisplayComponent]
    });
    fixture = TestBed.createComponent(EventdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
