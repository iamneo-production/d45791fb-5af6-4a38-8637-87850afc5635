import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEventCardComponent } from './total-event-card.component';

describe('TotalEventCardComponent', () => {
  let component: TotalEventCardComponent;
  let fixture: ComponentFixture<TotalEventCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalEventCardComponent]
    });
    fixture = TestBed.createComponent(TotalEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
