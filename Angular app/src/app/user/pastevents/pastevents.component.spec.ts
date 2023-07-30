import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteventsComponent } from './pastevents.component';

describe('PasteventsComponent', () => {
  let component: PasteventsComponent;
  let fixture: ComponentFixture<PasteventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasteventsComponent]
    });
    fixture = TestBed.createComponent(PasteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
