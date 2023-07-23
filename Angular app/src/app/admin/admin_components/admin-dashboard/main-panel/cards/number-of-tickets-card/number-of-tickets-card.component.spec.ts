import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfTicketsCardComponent } from './number-of-tickets-card.component';

describe('NumberOfTicketsCardComponent', () => {
  let component: NumberOfTicketsCardComponent;
  let fixture: ComponentFixture<NumberOfTicketsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberOfTicketsCardComponent]
    });
    fixture = TestBed.createComponent(NumberOfTicketsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
