import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDateFilterComponent } from './ticket-date-filter.component';

describe('TicketDateFilterComponent', () => {
  let component: TicketDateFilterComponent;
  let fixture: ComponentFixture<TicketDateFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDateFilterComponent]
    });
    fixture = TestBed.createComponent(TicketDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
