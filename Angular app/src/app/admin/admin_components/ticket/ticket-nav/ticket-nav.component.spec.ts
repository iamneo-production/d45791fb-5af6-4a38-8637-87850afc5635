import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNavComponent } from './ticket-nav.component';

describe('TicketNavComponent', () => {
  let component: TicketNavComponent;
  let fixture: ComponentFixture<TicketNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketNavComponent]
    });
    fixture = TestBed.createComponent(TicketNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
