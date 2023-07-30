import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUserCardComponent } from './total-user-card.component';

describe('TotalUserCardComponent', () => {
  let component: TotalUserCardComponent;
  let fixture: ComponentFixture<TotalUserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalUserCardComponent]
    });
    fixture = TestBed.createComponent(TotalUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
